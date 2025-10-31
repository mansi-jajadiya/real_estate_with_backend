import React from "react";
import "./HelpSection.css";

function HelpSection() {
  return (
    <div className="help-section-box-6789">
      <h5 className="help5-6789">Need Help Searching On Houzez?</h5>
      <p>
        If you forgot your password or want to change your email preferences,
        use the links below:
      </p>

      <ul className="custom-bullet-list-6789">
        <li>
          <a href="#">Lost your password?</a>
        </li>
        <li>
          <a href="#">Edit email preferences / Unsubscribe</a>
        </li>
      </ul>

      <h5 className="help5-6789">Contact Us</h5>
      <p>To contact Houzez, please select one of the following:</p>

      <ul className="custom-bullet-list-6789">
        <li>
          <a href="#">Renter questions</a>
        </li>
        <li>
          <a href="#">Property manager questions</a>
        </li>
        <li>
          <a href="#">Business opportunity questions</a>
        </li>
        <li>
          <a href="#">Careers opportunity questions</a>
        </li>
        <li>
          <a href="#">Customer Support</a>
        </li>
      </ul>
    </div>
  );
}

export default HelpSection;
