import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Agents.css";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    axios
      .get("http://localhost:1155/agents/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAgents(res.data.agents || []);
      })
      .catch((err) => console.error("Failed to fetch agents:", err));
  }, [token]);

  return (
    <section className="agents-section py-5">
      <div className="container">
        <div className="text-start mb-5">
          <h2 className="agents-title">Meet Our Agents</h2>
          <p className="agents-subtitle">
            CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS LISTS OR
            GRIDS, FULL-WIDTH OR BOXED
          </p>
        </div>

        <div className="row justify-content-center g-0">
          {agents.slice(0, 4).map((agent) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={agent?.id}>
              <div className="agent-card">
                <div className="agent-image-wrapper">
                  <div
                    className="agent-image"
                    style={{
                      backgroundImage: `url(${agent?.image})`,
                    }}
                    onClick={() => navigate(`/agents/${agent.id}`)}
                  />
                  {agent?.verified && (
                    <div className="verified-badge">
                      <span className="badge">✓ VERIFIED</span>
                    </div>
                  )}
                </div>

                <div className="agent-info">
                  <h5 className="agent-name">{agent?.name}</h5>
                  <p className="agent-title">{agent?.role}</p>
                  <p className="agent-description">{agent?.description}</p>
                  <button
                    onClick={() => navigate(`/agents/${agent.id}`)}
                    className="view-profile-link"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
