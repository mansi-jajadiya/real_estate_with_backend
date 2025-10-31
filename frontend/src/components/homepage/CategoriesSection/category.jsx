import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./category.css";

export default function Category() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1530/featuredCards")
      .then((res) => setFeaturedCards(res.data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="category-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10 col-md-11 col-12">
            <div className="row g-4">
              {featuredCards?.map((element) => (
                <div className="col-xl-4 col-md-6" key={element.id}>
                  <div className="category-card shadow-sm position-relative overflow-hidden">
                    <img
                      src={element?.image}
                      alt={element?.title}
                      onClick={() => navigate(`/category/${element.id}`)}

                      className="category-image"
                    />
                    <div className="position-absolute top-0 start-0 p-3 text-white">
                      <p className="mb-1 category-properties">
                        {element?.properties} properties
                      </p>
                      <h5 className="mb-0 category-title">{element?.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
