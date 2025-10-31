import React, { useEffect, useState } from "react";
import axios from "axios";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1530/team")
      .then((res) => setTeam(res.data))
      .catch((err) => console.error("Error fetching team:", err));
  }, []);

  return (
    <div className="team-section">
      {" "}
      <div className="container py-2">
        <div className="row">
          {team.map((member, index) => (
            <div className="col-xl-3 col-md-6 col-sm-6 col-12 mb-4" key={index}>
              <div className="team-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                />

                <div className="team-text">
                  <h6>{member.name}</h6>
                  <p className="role">{member.role}</p>
                </div>

                <div className="team-overlay">
                  <div className="overlay-header">
                    <h6>{member.name}</h6>
                    <p className="role">{member.role}</p>
                  </div>
                  <p className="desc">{member.description}</p>

                  <div className="info-icons d-flex justify-content-center mt-3  gap-3 flex-wrap">
                    <span>
                      {" "}
                      <SlSocialFacebook size={20} color="#506dab" />
                    </span>
                    <span>
                      {" "}
                      <FaXTwitter size={20} />
                    </span>
                    <span>
                      <SlSocialLinkedin size={20} color="#007bb6" />
                    </span>
                    <span>
                      <SlSocialPintarest size={20} color="red" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
