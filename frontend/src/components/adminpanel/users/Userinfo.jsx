import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import "./Userinfo.css";

const Userinfo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:1155/user/allusers")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="user-table-container">
      <h2 className="user-table-heading p-4 rounded-3 mb-4">
        Logged In User Details
      </h2>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstName || "-"}</td>
                  <td>{user.lastName || "-"}</td>
                  <td>{user.email || "-"}</td>
                  <td>{user.role || "-"}</td>

                  <td>
                    {" "}
                    <button
                      className="btn btn-sm"
                      style={{
                        color: "red",
                        background: "transparent",
                        border: "none",
                      }}
                    >
                      <FaTrashAlt
                        style={{
                          color: "red",
                          fontSize: "18px",
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
};

export default Userinfo;
