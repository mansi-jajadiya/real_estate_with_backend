import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose, IoAdd, IoRemove } from "react-icons/io5";
import { TbTruck } from "react-icons/tb";
import axios from "axios";
import { BsCart4 } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Addtocart.css";

const Addtocart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
    toast.info("Item removed from cart", {
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
    });
  };

  const increaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

const handleCheckout = async () => {
  try {
    const token = localStorage.getItem("token"); // get user token

    if (!token) {
      toast.error("Please login first!");
      return;
    }

    for (let i = 0; i < cart.length; i++) {  // ✅ use cart, not cartItems
      const item = cart[i];

      await axios.post(
        "http://localhost:1155/bookings/add",
        {
          Name: item.title,
          Quantity: item.quantity.toString(),
          Price: item.price.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // send token
          },
        }
      );
    }

    toast.success("Booking successful!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });

    // Optionally clear cart
    localStorage.removeItem("cart");
    setCart([]);
  } catch (error) {
    console.error("Error while booking:", error);
    toast.error("Booking failed. Please login again.");
  }
};



  const subtotal = cart.reduce(
    (sum, item) => sum + (parseFloat(item.price) || 0) * (item.quantity || 1),
    0
  );

  const taxRate = 0.1;
  const taxAmount = subtotal * taxRate;
  const shipping = subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal + taxAmount + shipping;

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart mb-5">
          <h3>No item in cart</h3>
          <p>Add some properties to your cart to continue.</p>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="cart-card">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <h3 className="cart-title">
                      <BsCart4 size={35} /> Your Cart ({cart.length} items)
                    </h3>
                  </div>

                  <div className="row fw-bold cart-header mb-3">
                    <div className="col-6">Property</div>
                    <div className="col-2 text-center">Price</div>
                    <div className="col-2 text-center">Quantity</div>
                    <div className="col-2 text-center">Total</div>
                  </div>

                  {cart.map((card) => (
                    <div
                      className="row flex-wrap cart-item align-items-center mb-3"
                      key={card.id}
                    >
                      <div className=" col-md-6 col-ms-6 col-12 d-flex align-items-start">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="item-image me-3"
                        />
                        <div>
                          <h6 className="item-title">{card.title}</h6>
                          <p className="item-description">{card.category}</p>
                        </div>
                      </div>

                      <div className=" col-md-2 col-ms-2 col-4 cart_manage text-sm-center">
                        <span className="item-price">
                          ${parseFloat(card.price).toFixed(2)}
                        </span>
                      </div>

                      <div className=" col-md-2 col-ms-2 col-4 cart_manage text-sm-center">
                        <div className="quantity-controls d-flex justify-content-sm-center align-items-center">
                          <button
                            className="quantity-btn"
                            onClick={() => decreaseQty(card.id)}
                          >
                            <IoRemove size={17} />
                          </button>
                          <span className="quantity-value mx-2">
                            {card.quantity}
                          </span>
                          <button
                            className="quantity-btn"
                            onClick={() => increaseQty(card.id)}
                          >
                            <IoAdd size={17} />
                          </button>
                        </div>
                      </div>

                      <div className=" col-md-2 col-ms-2 col-4 cart_manage text-center">
                        <div className="d-flex">
                          <span className="item-total">
                            $
                            {(parseFloat(card.price) * card.quantity).toFixed(
                              2
                            )}
                          </span>
                          <button
                            className="remove-btn-inline ms-2"
                            onClick={() => removeItem(card.id)}
                          >
                            <IoClose size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="summary-card p-3">
                        <div className="summary-row">
                          <span>Subtotal:</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                          <span>Tax (10%):</span>
                          <span>${taxAmount.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                          <span>Shipping:</span>
                          <span>${shipping.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="grand-total-row">
                          <span className="grand-total-label">
                            Grand total:
                          </span>
                          <span className="grand-total-amount">
                            ${grandTotal.toFixed(2)}
                          </span>
                        </div>

                        <div className="free-shipping-alert mt-2">
                          <TbTruck size={20} className="me-2" />
                          <small>
                            <MdCelebration size={20} /> Congrats, you’re
                            eligible for <strong>Free Shipping</strong>
                          </small>
                        </div>
                        <button
                          className="checkout-btn mt-3"
                          onClick={handleCheckout}
                        >
                          Check out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Addtocart;
