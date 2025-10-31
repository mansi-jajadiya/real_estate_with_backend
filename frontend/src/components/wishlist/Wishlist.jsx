import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const updateWishlist = (newWishlist) => {
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (id) => {
    updateWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = cart.find((c) => c.id === item.id);

    if (!alreadyInCart) {
      cart.push({ ...item, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    removeFromWishlist(item.id);

    navigate("/addtocart");
  };

  if (wishlist.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5 empty-wishlist w-100">
        <div className="w-100 w-md-75 w-lg-50">
          <h3 className="fw-bold">No items in Wishlist</h3>
          <p className="text-muted">
            Add properties to your wishlist to see them here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="wishlist-card">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <h3 className="wishlist-title">
                    <BsHeart size={30} /> Your Wishlist ({wishlist.length}{" "}
                    items)
                  </h3>
                </div>

                <div className="row fw-bold wishlist-header mb-3">
                  <div className="col-6">Property</div>
                  <div className="col-4 ">Price</div>
                  <div className="col-2 text-center">Actions</div>
                </div>

                {wishlist.map((item) => (
                  <div
                    className="row wishlist-item align-items-center mb-3"
                    key={item?.id}
                  >
                    <div className="col-md-6 col-sm-6 col-12 d-flex align-items-start">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="item-image me-3"
                      />
                      <div>
                        <h6 className="item-title">{item.title}</h6>
                        <p className="item-description">{item.category}</p>
                      </div>
                    </div>

                    <div className="col-md-2 col-sm-3 col-12 mb-sm-0 mb-2">
                      <span className="item-price">
                        ${parseFloat(item.price).toFixed(2)}
                      </span>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12 text-md-center">
                      <button
                        className="btn btn-sm btn-outline-success me-2"
                        onClick={() => moveToCart(item)}
                      >
                        <BsCart4 size={16} className="me-1" /> Move to Cart
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <IoClose size={16} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
