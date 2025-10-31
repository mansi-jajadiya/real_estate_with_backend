import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CalendarComponent from "./CalendarComponent";
import "./BlogPage.css";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
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
        setBlogs(res.data.blogs || []); 
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [token]);

  return (
    <div className="blog-page-6789">
      <div className="container mt-5 containerblog-6789">
        <div className="row rowblog-6789">
          {/* Left Section: Blogs */}
          <div className="col-md-8 colmd8blog-6789">
            {blogs.map((item) => (
              <div className="blog-post-6789 mb-5" key={item._id}>
                <img
                  src={item.image}
                  className="img-fluid mainimage-6789"
                  alt="blog"
                  onClick={() => navigate(`/blog/${item._id}`)}
                />
                <br />
                <br />
                <div className="blogcontaines-6789">
                  <a
                    style={{ textDecoration: "none" }}
                    className="mt-3 title-blog-6789"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog/${item._id}`);
                    }}
                  >
                    {item.title}
                  </a>

                  <br />

                  <p className="blog-text-6789">{item.description}</p>
                </div>

                <div className="author-block-page-6789 mt-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap flexing-wrap-6789">
                    <div className="d-flex align-items-center flex-wrap">
                      {item.authorImage && (
                        <img
                          src={item.authorImage}
                          alt="Author"
                          className="rounded-circle me-2 author-page-img-6789"
                          width="50"
                          height="50"
                        />
                      )}
                      <span className="me-3 authordetail-6789">
                        <span className="textblack-6789">by</span>{" "}
                        <span className="textgreen-6789">{item.author}</span>
                      </span>

                      <div className="author-date-6789">
                        <span className="me-3 text-muted">
                          <i className="bi bi-calendar3 me-1"></i> {item.date}
                        </span>
                      </div>

                      <div className="author-tag-6789">
                        <span className="me-3">
                          <i className="bi bi-tag me-1 icon-black"></i>
                          <span className="text-green-6789">{item.tag}</span>
                        </span>
                      </div>

                      <div className="author-comment-6789">
                        <span className="me-3 text-muted">
                          <i className="bi bi-chat-dots me-1"></i>{" "}
                          {item.comments}
                        </span>
                      </div>
                    </div>

                    <button
                      className="btn2-6789"
                      onClick={() => navigate(`/blog/${item.id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Sidebar */}
          <div className="col-md-3 colmd3blog-6789">
            <div className="sticky-sidebar-scroll-6789">
              <div className="sidebar-box-6789">
                <h5 className="aboutblog-h5-6789" style={{ color: "#77C720" }}>
                  About This Blog
                </h5>
                <p className="aboutblog-p-6789">
                  Discover the latest trends in real estate, property investment
                  tips, and expert advice to help you find your dream home or
                  make smart investments.
                </p>
              </div>

              <div className="sidebar-box-6789 mt-4">
                <h5>Topics</h5>
                <br />
                <ul className="list-unstyled-6789">
                  <li className="firstli-6789">
                    Business <p className="firstp-6789">(4)</p>
                  </li>
                  <li className="firstli-6789">
                    Construction <p className="firstp-6789">(4)</p>
                  </li>
                  <li className="firstli-6789">
                    Real Estate <p className="firstp-6789">(4)</p>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box-6789 mt-4">
                <h5>Calendar</h5>
                <CalendarComponent />
              </div>

              <div className="sidebar-box-6789 mt-4">
                <h5>Archives</h5>
                <ul className="list-unstyled-6789">
                  <li className="firstli-6789">
                    March 2016 <p className="firstp-6789">(10)</p>
                  </li>
                  <li className="firstli-6789">
                    January 2016 <p className="firstp-6789">(2)</p>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box-6789 mt-4">
                <h5 className="section-title-6789">Recent Comments</h5>
              </div>

              <div className="sidebar-box-6789 mt-4">
                <h5 className="section-title-6789">Tags</h5>
                <div className="tags-list-6789 mt-3">
                  Apartment Business Development House for families Houzez
                  Luxury Real Estate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default BlogPage;
