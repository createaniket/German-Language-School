import React from "react";
import "./FeaturesSection.css";
import Check from "../assets/images/check.svg";

export default function FeaturesSection() {
  const featuresTop = [
    "A live thirty minute expert led webinar",
    "Clarity on your correct starting level",
    "A structured roadmap for A1 to B2",
    "Timeline to finish each level realistically",
    "Exam strategy for Goethe and other common tests"
  ];

  const featuresBottom = [
    "A mini mock test to identify your current level",
    "Do’s and don’ts that save months of wasted time",
    "A simple ninety day study plan"
  ];

  return (
    <div className="features-wrapper">
      <h1 className="features-title">
        Everything You Need <br /> To Start Learning German The Right Way
      </h1>

      <p className="price-text">For ₹99, you get:</p>

      {/* Top Row */}
      <div className="features-grid">
        {featuresTop.map((item, index) => (
          <div className="feature-card" key={index}>
           <img src={Check} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="features-grid bottom-row">
        {/* Normal cards */}
        {featuresBottom.map((item, index) => (
          <div className="feature-card" key={index}>
    <img src={Check} alt="" />
            <p>{item}</p>
          </div>
        ))}

        {/* Bonus Card */}
        <div className="feature-card bonus-card">
          <span className="bonus-tag">Bonus</span>
          <p>Access to free resources after the session</p>
        </div>
      </div>
    </div>
  );
}
