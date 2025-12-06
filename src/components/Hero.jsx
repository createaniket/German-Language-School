import React from "react";
import "./Hero.css";
import VC_ICON from "../assets/images/vc_icon.svg";
import Calendar from "../assets/images/calendar.svg";



export default function Hero() {
  return (
    <section className="bg-[#FDFEF8]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="hero-top-head text-center leading-tight">
          <span className="block">German Language Learning</span>
          <span className="block text-[color:var(--primary-500)]">
            Webinar For Beginners To Advanced
          </span>
          <span className="block-hro-lvl-blk">Levels</span>
        </h1>

        <p className="hero-top-txt">
Get clarity on where to start, how to progress from A1 to B2, and how to prepare smartly for exams. 
All in one powerful thirty-minute ₹99 session.        </p>

        <div className="webinar-section-top">
          
          <div className="info-box">
            <p>
If you want to learn German the right way, avoid beginner mistakes, and follow a proper learning roadmap, this webinar is made for you.            </p>
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

            <button className="cta-btn">
              Join the Webinar @ ₹99 <span className="strike">₹999</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
