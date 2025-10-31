import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CalendarComponent from "../BlogPage/CalendarComponent.jsx";
import BlogCard from "./Blogcard/BlogCard.jsx";
import "./BlogDetails.css";

export default function Breadcrumb() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    axios
      .get("http://localhost:1155/blogs/getall", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const allBlogs = res.data.blogs || [];
        const foundBlog =
          allBlogs.find((b) => b._id === id || b.id === id) || null;
        setBlog(foundBlog);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [id, token]);

  useEffect(() => {
    const savedComment = localStorage.getItem("lastComment");
    if (savedComment) {
      setSubmittedComment(JSON.parse(savedComment));
    }
  }, []);

  if (!blog) return <div>Loading...</div>;

  // 🧠 Handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      alert("Please fill all fields!");
      return;
    }

    const newComment = {
      name,
      email,
      comment,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const lastComment = localStorage.getItem("lastComment");
    if (lastComment) {
      const parsedComment = JSON.parse(lastComment);
      if (
        parsedComment.name === newComment.name &&
        parsedComment.email === newComment.email &&
        parsedComment.comment === newComment.comment
      ) {
        navigate("/commentpart/duplicate-error");
        return;
      }
    }

    localStorage.setItem("lastComment", JSON.stringify(newComment));
    setSubmittedComment(newComment);
    setName("");
    setEmail("");
    setComment("");
    window.location.reload();
  };

  const handleReply = () => {
    setSubmittedComment(null);
    localStorage.removeItem("lastComment");
    window.location.reload();
  };

  return (
    <div className="blog-details-5678">
      <div className="container">
        {/* Breadcrumb */}
        <div
          className="firstdiv-5678"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "#777",
          }}
        >
          <img
            src="/images/house.png"
            alt="Home"
            style={{ width: "20px", height: "20px", marginRight: "6px" }}
          />
          <a
            href="#"
            className="hometext-5678"
            style={{ color: "#77C720", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <span style={{ margin: "0 8px" }}>{">"}</span>
          {/* <a
            href="#"
            className="businesstext-5678"
            style={{ color: "#77C720", cursor: "pointer" }}
          >
            {blog.tag || "Business"}
          </a> */}
          {/* <span style={{ margin: "0 8px" }}>{">"}</span> */}
          <span style={{ color: "#333" }}>{blog.title}</span>
        </div>

        {/* Main Blog Content */}
        <div className="mt-5">
          <div className="row">
            <div className="col-md-8 colmd8-5678">
              <div className="blog-post-5678 mb-5">
                <a
                  className="mt-3 title-blog2-5678"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  {blog.title}
                </a>

                {/* Author / Meta */}
                <div className="author-block-details-5678 mt-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap flexwraping-5678">
                    <div className="d-flex align-items-center flex-wrap flexwraping-5678">
                      <img
                        src={blog.authorImage || "/images/author1.jpg"}
                        alt="Author"
                        className="rounded-circle me-2 author-details-img-5678"
                        width="50"
                        height="50"
                      />
                      <span className="me-3">
                        <span className="text-black-5678">by</span>{" "}
                        <span className="text-green-5678">{blog.author}</span>
                      </span>

                      <span className="me-3 text-muted">
                        <i className="bi bi-calendar3 me-1"></i> {blog.date}
                      </span>
                      <span className="me-3">
                        <i className="bi bi-tag me-1 icon-black"></i>
                        <span className="text-green-5678">{blog.tag}</span>
                      </span>

                      <span className="me-3 text-muted">
                        <i className="bi bi-chat-dots me-1"></i>{" "}
                        {blog.comments || 0}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Blog Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid mainimage2-5678"
                />

                {/* Blog Content */}
                <div className="content-5678">
                  <p>{blog.description}</p>
                  {/* ... (rest of your static content remains unchanged) ... */}
                </div>
              </div>

              {/* Related Posts & Comment Section */}
              <div className="relatedpost-5678">Related Post</div>
              <BlogCard />

              <div className="discussion-form-wrapper-5678 p-4">
                <h4 className="mb-4">Join The Discussion</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-textarea-5678"
                      rows="4"
                      placeholder="Your Comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control form-name-5678"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3 colmd6">
                      <input
                        type="email"
                        className="form-control form-email-5678"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn submit-btn-5678">
                    Submit
                  </button>
                </form>
              </div>

              {submittedComment && (
                <div className="comment-box-5678">
                  <div className="comment-avatar-5678">
                    <img src="/images/avtar.jpg" alt="User Avatar" />
                  </div>
                  <div className="comment-content-5678">
                    <h5>{submittedComment.name}</h5>
                    <div className="comment-meta-5678">
                      <i className="bi bi-calendar3"></i>
                      {
                        submittedComment.date
                      } <i className="bi bi-clock"></i> {submittedComment.time}
                    </div>
                    <p className="comment-moderation-5678">
                      Your comment is awaiting moderation.
                    </p>
                    <p className="comment-text-5678">
                      {submittedComment.comment}
                    </p>
                    <span className="comment-reply-5678" onClick={handleReply}>
                      Reply
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-md-3 colmd3-5678">
              <div className="sticky-sidebar-scroll-5678">
                <div className="sidebar-box-5678">
                  <h5
                    className="aboutblog-h5-5678"
                    style={{ color: "#77C720" }}
                  >
                    About This Blog
                  </h5>
                  <p className="aboutblog-p-5678">
                    Discover the latest trends in real estate, property
                    investment tips, and expert advice to help you find your
                    dream home or make smart investments.
                  </p>
                </div>

                <div className="sidebar-box-5678 mt-4">
                  <h5>Calendar</h5>
                  <CalendarComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
