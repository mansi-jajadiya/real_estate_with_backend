import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { RiHomeLine } from "react-icons/ri";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import Leftbar from "./Leftbar";
import "./main.css";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [locationTitle, setLocationTitle] = useState(""); 
  const navigate = useNavigate();
  const { id } = useParams();
 const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:1155/cards/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCards(res.data.cards || []);
      })
      .catch((err) => console.error("Error fetching cards:", err));
  }, [token]);
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:1530/featuredCards/${id}`)
        .then((res) => setLocationTitle(res.data.title))
        .catch((err) => console.error("Error fetching location title:", err));
    }
  }, [id]);
  const visibleCards = cards
  ?.sort((a, b) => Number(a.id) - Number(b.id)) 
  .slice(15, 24); 

  return (
    <div className="page-wrapper">
      <div className="container py-4">
        <div className="breadcrumb-section">
          <div className="trail-nav d-flex align-items-center gap-2">
            <RiHomeLine />
            <span className="text" onClick={() => navigate("/")}>
              Home
            </span>
            <span>{"/"}</span>
             <span>{locationTitle || "Loading..."}</span>
          </div>
         <h2 className="page-title mt-2 mb-4">
            {locationTitle || "Loading..."}
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-3 mb-4">
            <Leftbar />
          </div>

          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 style={{ fontFamily: "Dosis" }}>
                 Properties
              </h5>
            </div>

            <div className="row g-4">
              {visibleCards.map((card) => (
                <div key={card.id} className="col-12 col-sm-6 col-lg-6">
                  <PropertyCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ card }) {
  const imageList = [card.image1, card.image2, card.image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMountedRef = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.some((item) => item.id === card.id);

    if (!exists) {
      const newItem = {
        id: card.id,
        title: card.title,
        price: card.price,
        category: card.category,
        image: card.image1,
        bedrooms: card.bedrooms,
        bathrooms: card.bathrooms,
        cars: card.cars,
        area: card.area,
        quantity: 1,
      };

      cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    navigate("/addtocart");
  };
  const handleAddToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some((item) => item.id === card.id);

    if (!exists) {
      const newItem = {
        id: card.id,
        title: card.title,
        price: card.price,
        category: card.category,
        image: card.image1,
        bedrooms: card.bedrooms,
        bathrooms: card.bathrooms,
        cars: card.cars,
        area: card.area,
      };

      wishlist.push(newItem);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    navigate("/wishlist");
  };

  const currentImgSrc = imageList[currentIndex];

  return (
    <div className="card frc-card h-100">
      <div className="frc-img-container position-relative">
        <span className="frc-badge-rt position-absolute top-0 end-0 m-4">
          FOR RENT
        </span>
        <span className="featured-badge position-absolute top-0 start-0 m-4">
          FEATURED
        </span>
        <img
          src={currentImgSrc}
          className="w-100 frc-img"
          alt={card?.title}
          onClick={() => navigate(`/product/${card.id}`)}
        />

        <button
          className="frc-arrow frc-arrow-left position-absolute top-50 start-0 translate-middle-y"
          onClick={prevImage}
        >
          <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
        </button>
        <button
          className="frc-arrow frc-arrow-right position-absolute top-50 end-0 translate-middle-y"
          onClick={nextImage}
        >
          <IoIosArrowForward />
        </button>

        <div className="position-absolute bottom-0 end-0 p-2 d-flex gap-2">
          <button
            className="frc-icon-btn"
            onClick={() => navigate(`/previewpage/${card.id}`)}
          >
            <BsArrowsAngleExpand />
          </button>
          <button className="frc-icon-btn" onClick={handleAddToWishlist}>
            <CiHeart />
          </button>
          <button className="frc-icon-btn" onClick={handleAddToCart}>
            <BsCart4 />
          </button>
        </div>
      </div>

      <div className="card-body text-center">
        <h5 className="frc-property-title">{card?.title}</h5>
        <h6 className="frc-price">
          ${card?.price} <small>/mo</small>
        </h6>
        <p className="text-muted frc-category">{card?.category}</p>

        <div className="frc-info-icons d-flex justify-content-center gap-3 flex-wrap">
          <span>
            <LuBedDouble /> {card?.bedrooms}
          </span>
          <span>
            <FaShower /> {card?.bathrooms}
          </span>
          <span>
            <IoCarOutline /> {card?.cars}
          </span>
          <span>
            <TfiRulerAlt2 /> {card?.area}
          </span>
        </div>
      </div>
    </div>
  );
}
