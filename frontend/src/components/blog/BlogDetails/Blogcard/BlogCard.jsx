import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import "./BlogCard.css";
import axios from "axios";
const BlogCardGrid = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
   const token = localStorage.getItem("token");
    
    useEffect(() => {
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
  
      axios
        .get("http://localhost:1155/blogs/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Blogs Response:", res.data);
          setPosts(res.data.blogs || []); 
        })
        .catch((err) => console.error("Error fetching blogs:", err));
    }, [token]);
  

  return (
    <div className="blog-card-container-blogpage-6789">
      {posts.slice(4, 7).map((post) => (
        <div className="blog-card-wrapper-blogpage-6789" key={post.id}>
          <div className="blog-card-blogpage-6789">
            <div className="blog-image-blogpage-6789">
              <img
                src={post.image}
                alt={post.title}
                onClick={() => navigate("/blogpage")}
              />
            </div>
            <div className="blog-content-blogpage-6789">
              <div className="blog-meta">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-calendar3 text-muted me-2"></i>
                  <small className="me-3">{post.date}</small>
                  <i className="bi bi-tag me-1"></i>
                  <small className="text-blogpage-6789">{post.tag}</small>
                </div>
              </div>
              <h5 className="blog-title-blogpage-6789">{post.title}</h5>
              <p className="blog-desc-blogpage-6789">{post.description}</p>
              <span
                className="continue-blogpage-6789"
                style={{ cursor: "pointer", color: "#77C720" }}
                onClick={() => navigate("/blogpage")}
              >
                Continue reading
              </span>
            </div>
            <div className="card-footer-blogpage-6789 bg-white border-1">
              <small className="textlast">
                <BsPerson /> by {post.author}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardGrid;
