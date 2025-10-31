import React from "react";
import { useNavigate } from "react-router-dom";
import "./DuplicateError.css";

function DuplicateError() {
  const navigate = useNavigate();

  return (
    <div className="duplicate-error-container-6789">
      <h2 className="error-title-6789">Duplicate Comment Found!</h2>
      <p className="error-message-6789">
        You have already submitted this same comment. Please try something new.
      </p>

      <button className="back-btn-6789" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default DuplicateError;
