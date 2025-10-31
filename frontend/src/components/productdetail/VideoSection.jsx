import React from "react";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <div className="video-wrapper">
      <div className="container px-0">
        <div className="video-section">
          <h2 className="video-title">Video</h2>
          <div className="video-line"></div>

          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/-NInBEdSvp8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
