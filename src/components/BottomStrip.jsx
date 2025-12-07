import React, { useEffect, useState } from "react";
import "./BottomStrip.css";

import CalendarIcon from "../assets/images/calendar.svg";
import VideoIcon from "../assets/images/vc_icon.svg";

import PaymentModal from "./PaymentModal"; // ✅ IMPORTANT

export default function BottomStrip() {

  const [showStrip, setShowStrip] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowStrip(true);
      } else {
        setShowStrip(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Razorpay Modal (your existing file) */}
      <PaymentModal isOpen={openModal} onClose={() => setOpenModal(false)} />

      <div className={`bottomstrip-wrapper ${showStrip ? "active" : ""}`}>
        
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
            <img src={CalendarIcon} className="bs-icon" alt="calendar-icon" />
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
          <button className="bs-btn" onClick={() => setOpenModal(true)}>
            <span className="bs-badge">22 Seats left</span>
            Book your seat now
          </button>
        </div>
      </div>
    </>
  );
}
