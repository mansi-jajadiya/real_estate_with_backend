import React from "react";
import { FaSearch } from "react-icons/fa";
import "./AgentSearch.css";

export default function AgentSearch({
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleEmailSearch,
}) {
  return (
    <div className="agent-search-container">
      <div className="container">
        <div className="row g-2 align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="input-group">
              <span className="input-group-text search-icon">
                <FaSearch />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control search-input"
                placeholder="Enter agent name or email"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12">
            <button
              className="btn search-btn w-100"
              onClick={handleEmailSearch}
            >
              Search By Email
            </button>
          </div>

          <div className="col-lg-3 col-md-4 col-12">
            <button className="btn search-btn w-100" onClick={handleSearch}>
              Search Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
