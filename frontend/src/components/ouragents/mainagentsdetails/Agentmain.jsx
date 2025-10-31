import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiHomeLine } from "react-icons/ri";
import { FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGoogle } from "react-icons/tb";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { LuBedDouble } from "react-icons/lu";
import AgentSearch from "../agentsearch/AgentSearch";
import "./Agentmain.css";

export default function Agentmain() {
  const [agents, setAgents] = useState([]);

  const [topSearchTerm, setTopSearchTerm] = useState("");
  const [sideSearchTerm, setSideSearchTerm] = useState("");

  const [filteredAgents, setFilteredAgents] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

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

  const isEmail = (value) =>
    typeof value === "string" &&
    value.includes("@") &&
    value.includes(".") &&
    !value.includes(" ");

  const handleTopNameSearch = () => {
    setSearchClicked(true);

    if (isEmail(topSearchTerm)) {
      setFilteredAgents([]);
      return;
    }

    const result = agents.filter((agent) =>
      agent.name?.toLowerCase().includes(topSearchTerm.toLowerCase())
    );
    setFilteredAgents(result);
  };

  const handleTopEmailSearch = () => {
    setSearchClicked(true);

    if (!isEmail(topSearchTerm)) {
      setFilteredAgents([]);
      return;
    }

    const result = agents.filter((agent) =>
      agent.email?.toLowerCase().includes(topSearchTerm.toLowerCase())
    );
    setFilteredAgents(result);
  };

  const handleSideNameSearch = () => {
    setSearchClicked(true);

    if (isEmail(sideSearchTerm)) {
      setFilteredAgents([]);
      return;
    }

    const result = agents.filter((agent) =>
      agent.name?.toLowerCase().includes(sideSearchTerm.toLowerCase())
    );
    setFilteredAgents(result);
  };

  const handleSideEmailSearch = () => {
    setSearchClicked(true);

    if (!isEmail(sideSearchTerm)) {
      setFilteredAgents([]);
      return;
    }

    const result = agents.filter((agent) =>
      agent.email?.toLowerCase().includes(sideSearchTerm.toLowerCase())
    );
    setFilteredAgents(result);
  };

  useEffect(() => {
    if (topSearchTerm.trim() === "" && sideSearchTerm.trim() === "") {
      setSearchClicked(false);
      setFilteredAgents([]);
    }
  }, [topSearchTerm, sideSearchTerm]);

  const agentsToShow = searchClicked ? filteredAgents : agents;

  return (
    <div className="agentx-section py-4">
      <AgentSearch
        searchTerm={topSearchTerm}
        setSearchTerm={setTopSearchTerm}
        handleSearch={handleTopNameSearch}
        handleEmailSearch={handleTopEmailSearch}
      />

      <div className="container">
        <div className="agentx-breadcrumb-wrap">
          <div className="agentx-breadcrumb d-flex align-items-center gap-2">
            <RiHomeLine />
            <span
              className="agentx-breadcrumb-link"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span>{"/"}</span>
            <span>All Agents</span>
          </div>
          <h2 className="agentx-title mt-2 mb-4">All Agents</h2>
        </div>

        <div className="row">
          <div className="col-md-8 mt-3">
            {agentsToShow.length > 0 ? (
              agentsToShow.map((agent) => (
                <div
                  key={agent.id}
                  className="card p-4 agentx-card d-flex flex-lg-row flex-column align-items-lg-start align-items-center mb-3"
                >
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="agentx-photo"
                  />
                  <div className="agentx-info  ms-3 mt-lg-0 mt-3">
                    <div className="d-flex flex-wrap gap-2 mb-2 align-items-center">
                      <div className="agentx-verified-badge">
                        <FaCheckCircle /> VERIFIED
                      </div>
                      <h5
                        className="mb-0 agentx-name"
                        onClick={() => navigate(`/agents/${agent.id}`)}
                        role="button"
                        style={{ cursor: "pointer" }}
                        title="View Agent Profile"
                      >
                        {agent.name}
                      </h5>
                      <div className="agentx-rating ms-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                      </div>
                    </div>
                    <p className="text-muted mb-3 agentx-company">
                      {agent.cname}
                    </p>
                    <div className="agentx-contact">
                      <div className="agentx-contact-row border-bottom">
                        <span className="agentx-contact-label">Office</span>
                        <span className="agentx-contact-value">
                          {agent.office}
                        </span>
                      </div>
                      <div className="agentx-contact-row border-bottom">
                        <span className="agentx-contact-label">Mobile</span>
                        <span className="agentx-contact-value">
                          {agent.mobile}
                        </span>
                      </div>
                      <div className="agentx-contact-row border-bottom">
                        <span className="agentx-contact-label">Fax</span>
                        <span className="agentx-contact-value">
                          {agent.fax}
                        </span>
                      </div>
                      <div className="agentx-contact-row border-bottom">
                        <span className="agentx-contact-label">Email</span>
                        <span className="agentx-contact-value">
                          {agent.email}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <div className="agentx-social d-flex gap-2">
                        <SlSocialFacebook size={18} color="#506dab" />
                        <FaXTwitter size={18} />
                        <SlSocialLinkedin size={18} color="#007bb6" />
                        <TbBrandGoogle size={18} color="#77c720" />
                        <PiYoutubeLogoLight size={18} color="red" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No agents found.</p>
            )}
          </div>

          <div className="col-md-4 mt-3 riddhi position-sticky top-0">
            <div className="card p-4 d-flex flex-column align-items-center agentx-sidebar-card mb-4">
              <h5 className="mb-3">Find Agent</h5>
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Enter agent name or email"
                value={sideSearchTerm}
                onChange={(e) => setSideSearchTerm(e.target.value)}
              />

              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn agentx-btn"
                  onClick={handleSideEmailSearch}
                >
                  Search By Email
                </button>
                <button
                  className="btn agentx-btn"
                  onClick={handleSideNameSearch}
                >
                  Search Agent
                </button>
              </div>
            </div>

            <div className="card listing-card ">
              <div className="img-container position-relative">
                <img
                  src="/images/card1-1.jpg"
                  alt="apartment"
                  className="w-100 listing-image"
                />
                <div className="price-overlay position-absolute bottom-0 start-0 text-white p-3">
                  <h5 className="fw-bold mb-0">$3750/mo</h5>
                  <small>$3500/sq ft</small>
                </div>
              </div>
              <div className="card-body">
                <h6 className="listing-title">Contemptory Apartment</h6>
                <p className="text-muted mb-2">
                  <CiLocationOn className="me-1" size={20} /> Marcy Av Brooklyn,
                  NY 11211, USA
                </p>
                <div className="feature-icons d-flex flex-wrap gap-3 mt-3">
                  <span>
                    <LuBedDouble />4
                  </span>
                  <span>
                    <FaShower />2
                  </span>
                  <span>
                    <IoCarOutline />1
                  </span>
                  <span>
                    <TfiRulerAlt2 />
                    1200 m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
