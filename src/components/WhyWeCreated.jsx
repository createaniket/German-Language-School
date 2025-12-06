import React from "react";
import "./WhyWeCreated.css";
import rightImg from "../assets/images/wwct.jpg"; // your right-side image

export default function WhyWeCreated() {
  return (
    <section className="why-wrapper">
      <div className="why-container">
        
        {/* Left Side */}
        <div className="why-left">
          <h2 className="why-title">Why We Created This</h2>

          <h3 className="why-price">
            ₹99 <span>Webinar</span>
          </h3>

          <p className="why-desc">
            Most learners start German blindly and end up wasting money and time
            with unstructured preparation. This webinar fixes that by giving you
            one clear plan for the entire A1 to B2 journey.
          </p>

          <p className="why-bold">
            We want every learner to start correctly, progress confidently, and
            prepare for exams with a proper strategy.
          </p>

          <div className="why-strip">
            Career guidance is included as a free value add, not a selling point
          </div>
        </div>

        {/* Right Side */}
        <div className="why-right">
          <img src={rightImg} alt="webinar student" />
        </div>

      </div>
    </section>
  );
}
