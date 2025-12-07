import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">

        <h1 className="cta-title">
          Start Your German Learning <br />
          <span>Journey With Clarity</span>
        </h1>

        <p className="cta-subtext">
          Whether you are a beginner or stuck at a level, this session gives you a clear roadmap for A1 to
          B2 and helps you avoid the mistakes most learners make.
        </p>

        <div className="cta-highlight-box">
          This is the smartest ₹99 you will spend before starting your German journey.
        </div>



        <button className="cta-join-btn"   onClick={() => window.location.href = "https://rzp.io/rzp/M6tgETL"}>
          Join The ₹99 Webinar Now
        </button>

        <p className="cta-note-text">
          Instant Zoom link + resources sent after registration.
        </p>

      </div>
    </section>
  );
}
