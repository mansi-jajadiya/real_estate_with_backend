import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import "./AgentProfileCard.css";

export default function AgentProfileCard({ agentId }) {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
  if (!agentId) return;

  axios
    .get(`http://localhost:1155/agents/getsingle/${agentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => setAgent(res.data))
    .catch((err) => console.error("Error fetching agent:", err));
}, [agentId]);


  const staticData = {
    license: "090-0348-8346",
    taxNumber: "HGT-92384-3434",
    serviceAreas:
      "Grand Rapids, Forest Hills, Comstock Park, Caledonia, Kentwood, Grandville, Rockford, Walker, Belmont, Lowell",
    specialties:
      "Property Management, Consulting, Buyer's Agent, Listing Agent, Relocation",
  };

  if (!agent) {
    return (
      <div className="unique-agent-profile-wrapper text-center py-5">
        <p>Loading agent details...</p>
      </div>
    );
  }

  return (
    <div className="unique-agent-profile-wrapper">
      <div className="container my-3">
        <div className="unique-agent-profile-card shadow-sm bg-white">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 text-center">
              <img
                src={agent.image || "/images/default-agent.jpg"}
                alt={agent.name}
                className="unique-agent-profile-img"
              />
            </div>

            <div className="col-lg-8 col-md-7 unique-agent-profile-info mt-md-0 mt-3">
              <h4 className="mb-1">{agent.name}</h4>

              <div className="d-flex align-items-center mb-2">
                <span className="unique-agent-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                
              </div>

              <p className="unique-agent-role mb-3">{agent.cname}</p>

              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Office:</strong>{" "}
                {agent.office || "N/A"}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Mobile:</strong>{" "}
                {agent.mobile || "N/A"}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Fax:</strong>{" "}
                {agent.fax || "N/A"}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Email:</strong>{" "}
                {agent.email || "N/A"}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Location:</strong>{" "}
                {agent.location || "N/A"}
              </p>

              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Agent License:</strong>{" "}
                {staticData.license}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Tax Number:</strong>{" "}
                {staticData.taxNumber}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Service Areas:</strong>{" "}
                {staticData.serviceAreas}
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Specialties:</strong>{" "}
                {staticData.specialties}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
