import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../users/Userinfo.css";

export default function ContactUs() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:1155/contacts/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(res.data.contacts || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to fetch contacts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      const res = await axios.delete(
        `http://localhost:1155/contacts/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Contact deleted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setContacts((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (err) {
      console.error("Error deleting contact:", err);
      if (err.response?.status === 404) {
        toast.error("Contact not found!", { position: "top-right" });
      } else {
        toast.error("Failed to delete contact. Please try again.", {
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
        Contact Submissions
      </h2>

      {loading ? (
        <p>Loading contacts...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : contacts.length === 0 ? (
        <p className="text-muted">No contact messages found.</p>
      ) : (
        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Submitted On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td
                    style={{
                      maxWidth: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={contact.message}
                  >
                    {contact.message}
                  </td>
                  <td>
                    {new Date(contact.createdAt).toLocaleDateString()}{" "}
                    {new Date(contact.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(contact._id)}
                      disabled={deletingId === contact._id}
                      style={{
                        color: "red",
                        background: "transparent",
                        border: "none",
                        cursor:
                          deletingId === contact._id
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      <FaTrashAlt
                        style={{
                          color: "red",
                          fontSize: "18px",
                          opacity: deletingId === contact._id ? "0.5" : "1",
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
