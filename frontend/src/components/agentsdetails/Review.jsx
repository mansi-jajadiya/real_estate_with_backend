import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrAttachment } from "react-icons/gr";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import InfoCard from "./InfoCard";
import "./Review.css";

const Review = () => {
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

  const navigate = useNavigate();

  return (
    <div>
      <InfoCard reviewCount={reviews.length} />

      <div className="review-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card p-4 mb-2 review">
                <div className="d-flex flex-wrap justify-content-between align-items-center review-header">
                  <h5 className="mb-0 review-title mt-2">
                    {reviews.length} Review(s){" "}
                    <span className="stars">★★★★★</span>{" "}
                    <span className="rating-text">
                      (Avg{" "}
                      {(
                        reviews.reduce((a, b) => a + b.rating, 0) /
                        reviews.length
                      ).toFixed(1)}{" "}
                      out of 5)
                    </span>
                  </h5>
                  <button className="btn btn-green border mt-2">
                    Leave a Review
                  </button>
                </div>

                {reviews.map((rev) => (
                  <div key={rev.id} className="d-flex mt-4 review-item">
                    <img
                      src={rev.avatar}
                      alt="User"
                      className="review-avatar"
                    />
                    <div className="d-flex flex-column w-100">
                      <div>
                        <h6 className="mb-1">
                          {rev.name}{" "}
                          <span className="stars">
                            {"★".repeat(rev.rating)}
                            {"☆".repeat(5 - rev.rating)}
                          </span>
                        </h6>
                        <p className="review-meta">
                          <GrAttachment className="me-2" />
                          {rev.time}
                        </p>
                        <p className="review-text">{rev.text}</p>
                      </div>

                      {/* <div className="like-dislike text-end mt-auto">
                        <span className="like me-3">
                          <BsHandThumbsUp size={20} /> {rev.likes}
                        </span>
                        <span className="dislike">
                          <BsHandThumbsDown size={20} /> {rev.dislikes}
                        </span>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-4 review-card">
                <h5 className="mb-4">Leave A Review</h5>

                {error && (
                  <div className="alert alert-danger d-flex justify-content-between align-items-center">
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
                  <div className="alert alert-success d-flex justify-content-between align-items-center">
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

                  <button type="submit" className="btn btn-green w-100">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 review-card mb-4">
                <h5 className="mb-3">Find Agent</h5>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Enter agent name or email"
                  onClick={() => {
                    navigate("/ouragents");
                  }}
                />
                <button
                  className="btn agentxy w-100 mb-4"
                  onClick={() => {
                    navigate("/ouragents");
                  }}
                >
                  Search By Email
                </button>
                <button
                  className="btn agentxy w-100"
                  onClick={() => {
                    navigate("/ouragents");
                  }}
                >
                  Search By Name
                </button>
              </div>

              <div className="sidebar-section bg-white">
                <h6 className="sidebar-title p-3">Featured Properties</h6>
                <div className="card custom-card h-100">
                  <div className="image-container position-relative">
                    <span className="badge featured-badge position-absolute top-0 start-0 m-3">
                      FEATURED
                    </span>
                    <span className="badge rent position-absolute top-0 end-0 m-3">
                      FOR RENT
                    </span>
                    <img
                      src="/images/card1-2.png"
                      className="w-100 card-image"
                      alt="Modern Day Apartment"
                      style={{ cursor: "default" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title property-title mb-2 fs-5">
                      Modern Day Apartment
                    </h5>
                    <p className="text-muted category-label fs-6 mb-4 text-center">
                      <CiLocationOn size={18} /> 33 NE 4tg St Miami, FL 33132
                    </p>

                    <div className="info-icons d-flex justify-content-center gap-3 flex-wrap">
                      <span>
                        <LuBedDouble /> 4
                      </span>
                      <span>
                        <FaShower /> 2
                      </span>
                      <span>
                        <IoCarOutline /> 1
                      </span>
                      <span>
                        <TfiRulerAlt2 /> 1200 m²
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
