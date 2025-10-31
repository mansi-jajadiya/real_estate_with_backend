import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sed Do Eiusmod Tempor Incididunt",
      email: "test@example.com",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "6 years ago",
      avatar: "/images/agent1-1.jpg",
      likes: 1,
      dislikes: 0,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !title || !rating || !review) {
      setError("All fields are required");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email address.");
      return;
    }
    if (!title.trim()) {
      setError("Title cannot be empty.");
      return;
    }
    if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
      setError("Rating must be a number between 1 and 5.");
      return;
    }
    if (!review.trim()) {
      setError("Review cannot be empty.");
      return;
    }

    const alreadyExists = reviews.some((rev) => rev.email === email);
    if (alreadyExists) {
      setError("You have already submitted a review with this email.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: title,
      email: email,
      rating: parseInt(rating),
      text: review,
      time: "Just now",
      avatar: "/images/profile-avatar.png",
      likes: 0,
      dislikes: 0,
    };

    setReviews([newReview, ...reviews]);

    setSuccess("Review submitted successfully!");
    setEmail("");
    setTitle("");
    setRating("");
    setReview("");
  };

  return (
    <div className="unique-review-section py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card px-4 pb-4 mb-4 unique-review-box">
              <div className="d-flex flex-wrap justify-content-between align-items-center unique-review-header">
                <h5 className="mb-0 unique-review-title mt-3">
                  {reviews.length} Review(s){" "}
                  <span className="unique-review-stars">★★★★★</span>{" "}
                  <span className="unique-review-rating-text">
                    (Avg{" "}
                    {(
                      reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                    ).toFixed(1)}{" "}
                    out of 5)
                  </span>
                </h5>
                <button className="btn unique-review-btn-green border mt-3">
                  Leave a Review
                </button>
              </div>

              {reviews.map((rev) => (
                <div key={rev.id} className="d-flex mt-4 unique-review-item">
                  <img
                    src={rev.avatar}
                    alt="User"
                    className="unique-review-avatar"
                  />
                  <div className="d-flex flex-column w-100">
                    <div>
                      <h6 className="mb-1">
                        {rev.name}{" "}
                        <span className="unique-review-stars">
                          {"★".repeat(rev.rating)}
                          {"☆".repeat(5 - rev.rating)}
                        </span>
                      </h6>
                      <p className="unique-review-meta">
                        <GrAttachment className="me-2" />
                        {rev.time}
                      </p>
                      <p className="unique-review-text">{rev.text}</p>
                    </div>

                    <div className="unique-review-like-dislike text-end mt-auto">
                      <span className="unique-review-like me-3">
                        <BsHandThumbsUp size={20} /> {rev.likes}
                      </span>
                      <span className="unique-review-dislike">
                        <BsHandThumbsDown size={20} /> {rev.dislikes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-4 unique-review-card">
              <h5 className="mb-4">Leave A Review</h5>

              {error && (
                <div className="alert alert-danger review-alert-danger d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <VscError />
                    <div className="ms-3">{error}</div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setError("")}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {success && (
                <div className="alert alert-success review-alert-success d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegCheckCircle />
                    <div className="ms-3">{success}</div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSuccess("")}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter a title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Rating (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="1=Poor , 5=Excellent"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Review</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write a review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn unique-review-btn-green w-100"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
