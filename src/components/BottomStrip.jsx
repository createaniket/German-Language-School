import React from "react";
import "./BottomStrip.css";

import CalendarIcon from "../assets/images/calendar.svg";
import VideoIcon from "../assets/images/vc_icon.svg";

export default function BottomStrip() {




  return (
    <div className={`bottomstrip-wrapper`}>
      
      {/* PRICE */}
      <div className="bs-price-section">
        <div className="bs-price-big">₹99</div>
        <div className="bs-price-right">
          <div className="bs-old-price">Rs.999</div>
          <div className="bs-discount">90% OFF</div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="bs-features">
        <div className="bs-feature">
          <img src={CalendarIcon} className="bs-icon"  alt="calendar-icon"/>
          <div>
            <h4>Daily Batches</h4>
            <p>Morning • Afternoon • Evening</p>
          </div>
        </div>

        <div className="bs-feature">
          <img src={VideoIcon} className="bs-icon" alt="zoom-icon" />
          <div>
            <h4>Online</h4>
            <p>Zoom Webinar • 30 Min Session</p>
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="bs-cta">
        <button className="bs-btn">
          <span className="bs-badge">22 Seats left</span>
          Book your seat now
        </button>
      </div>
    </div>
  );
}
