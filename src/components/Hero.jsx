import React, { useState } from "react";
import "./Hero.css";
import VC_ICON from "../assets/images/vc_icon.svg";
import Calendar from "../assets/images/calendar.svg";

import PaymentModal from "./PaymentModal"; // ✅ IMPORT

export default function Hero() {

  const [openModal, setOpenModal] = useState(false); // ✅ MODAL STATE

  return (
    <>
      {/* Razorpay Modal */}
      <PaymentModal isOpen={openModal} onClose={() => setOpenModal(false)} />

      <section className="hero-top-sect">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="hero-top-head text-center leading-tight">
            <span className="block">German Language Learning</span>
            <span className="block main-color-sit">
              Webinar For Beginners To Advanced
            </span>
            <span className="block-hro-lvl-blk">Levels</span>
          </h1>

          <p className="hero-top-txt">
            Get clarity on where to start, how to progress from A1 to B2, and how to prepare smartly for exams.
            All in one powerful thirty-minute ₹99 session.
          </p>

          <div className="webinar-section-top">

            <div className="info-box">
              <p>
                If you want to learn German the right way, avoid beginner mistakes, and follow a proper learning roadmap, this webinar is made for you.
              </p>
            </div>

            <div className="right-content">

              <div className="features">

                <div className="feature-item">
                  <img src={Calendar} alt="Calendar Icon" className="icon" />
                  <div>
                    <h4>Daily Batches</h4>
                    <span>Morning • Afternoon • Evening</span>
                  </div>
                </div>

                <div className="feature-item">
                  <img src={VC_ICON} alt="Video Icon" className="icon" />
                  <div>
                    <h4>Online</h4>
                    <span>Zoom Webinar • 30 Min Session</span>
                  </div>
                </div>

              </div>

              {/* CTA BUTTON — NOW OPENS MODAL */}
              {/* <button className="cta-btn" onClick={() => setOpenModal(true)}>
                Join the Webinar @ ₹99 <span className="strike">₹999</span>
              </button> */}

              <button
                className="cta-btn"
                onClick={() => window.location.href = "https://rzp.io/rzp/M6tgETL"}
              >
                Join the Webinar @ ₹99 <span className="strike">₹999</span>
              </button>


            </div>
          </div>

        </div>
      </section>
    </>
  );
}
