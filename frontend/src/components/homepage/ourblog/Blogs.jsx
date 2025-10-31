import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import "./Blogs.css";

export default function Updates() {
  const [updates, setUpdates] = useState([]);
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
        setUpdates(allBlogs);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [token]);


  return (
    <section className="updates-section py-5 custom-py-5">
      <div className="container custom-container">
        <div className="row custom-row">
          <div className="col-lg-12 custom-col-full">
            <div className="text-start mb-5 custom-mb-5 custom-text-start">
              <h2 className="updates-title">Updates From Our Blog</h2>
              <p className="updates-subtitle custom-subtitle">
                CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS
                LISTS OR GRIDS, FULL-WIDTH OR BOXED
              </p>
            </div>

            <div className="row custom-row">
              {updates?.slice(-4).map((update) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 mb-4 px-3 custom-col custom-mb-4 custom-px-3"
                  key={update?.id}
                >
                  <div className="update-card">
                    <div
                      className="update-image"
                      onClick={() => navigate(`/blog/${update.id}`)}
                    >
                      <img
                        src={update?.image}
                        alt={update?.title}
                        className="card-image"
                      />
                    </div>

                    <div className="update-content">
                      <div className="update-meta">
                        <span className="update-date">
                          <i className="calendar-icon fs-5 custom-fs-5">
                            <MdOutlineCalendarMonth />
                          </i>{" "}
                          {update?.date}
                        </span>
                        <span className="update-category">
                          <i className="tag-icon fs-5 custom-fs-5">
                            <FaTag />
                          </i>
                          {update?.tag}
                        </span>
                      </div>

                      <h5 className="update-title">{update?.title}</h5>
                      <p className="update-description">
                        {update?.description}
                      </p>

                      <Link
                        to={`/blog/${update.id}`}
                        className="continue-reading"
                      >
                        Continue reading
                      </Link>

                      <div className="update-author border-top custom-border-top">
                        <span className="author-icon">
                          <i className="prof-icon">
                            <CgProfile />
                          </i>
                        </span>{" "}
                        by {update.author}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
