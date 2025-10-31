import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../users/Userinfo.css";

export default function Book() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:1155/bookings/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(res.data.bookings || []); // ✅ fixed key
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Failed to fetch bookings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      const res = await axios.delete(
        `http://localhost:1155/bookings/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Booking deleted successfully!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
        setBookings((prev) => prev.filter((b) => b._id !== id));
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
      if (err.response?.status === 404) {
        toast.error("Booking not found!", { position: "top-right" });
      } else {
        toast.error("Failed to delete booking. Please try again.", {
          position: "top-right",
        });
      }
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="user-table-container">
      <ToastContainer />

      <h2 className="user-table-heading p-4 rounded-3 mb-4">
        All Bookings
      </h2>

      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : bookings.length === 0 ? (
        <p className="text-muted">No bookings found.</p>
      ) : (
        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.SrNo}</td>
                  <td>{booking.Name}</td>
                  <td>{booking.Quantity}</td>
                  <td>${booking.Price}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(booking._id)}
                      disabled={deletingId === booking._id}
                      style={{
                        color: "red",
                        background: "transparent",
                        border: "none",
                        cursor:
                          deletingId === booking._id
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      <FaTrashAlt
                        style={{
                          color: "red",
                          fontSize: "18px",
                          opacity: deletingId === booking._id ? "0.5" : "1",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
