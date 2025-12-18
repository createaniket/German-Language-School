import React from "react";
import "./FeaturesSection.css";
import webinarImg from "../assets/images/webinarImg.png";
import Check from "../assets/images/check.svg";

export default function FeaturesSection() {
  const leftFeatures = [
    "A live thirty minute expert led webinar",
    "A structured roadmap for A1 to B2",
    "Timeline to finish each level realistically",
    "A mini mock test to identify your current level",
  ];

  const rightFeatures = [
    "Clarity on your correct starting level",
    "A simple ninety day study plan",
    "Exam strategy for Goethe and other common tests",
    "Do’s and don’ts that save months of wasted time",
  ];

  return (
    <section className="webinar-wrapper">
      <h1 className="webinar-title-feature">
        Everything You Need <br />
To Start Learning French The Right Way
      </h1>

      <div className="webinar-content">
        {/* Left Image */}
        <div className="webinar-image">
          <img src={webinarImg} alt="German Learning Session" />
        </div>

        {/* Right Content */}
        <div className="webinar-details">
          <h3 className="price-title">For ₹99, you get:</h3>

          <div className="features-grid">
            <ul>
              {leftFeatures.map((item, index) => (
                <li key={index}>
                  <img src={Check} alt="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul>
              {rightFeatures.map((item, index) => (
                <li key={index}>
                  <img src={Check} alt="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bonus-box">
            <span className="bonus-tag">Bonus</span>
            <span>Access to free resources after the session</span>
          </div>
        </div>
      </div>
    </section>
  );
}
