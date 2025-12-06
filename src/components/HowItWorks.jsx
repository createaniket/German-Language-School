import React from "react";
import "./HowItWorks.css";
import girlImg from "../assets/images/howitworks.png";

export default function HowItWorks() {
  return (
    <section className="how-wrapper">
      <div className="how-container">

        {/* LEFT IMAGE */}
        <div className="how-left">
          <img src={girlImg} alt="webinar" className="how-img" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="how-right">
          <h2 className="how-title">How It Works</h2>
          <p className="how-subtitle">How To Join</p>

          <div className="how-box">

            {/* STEP 1 */}
            <div className="step-row">
              <div className="timeline-dot active"></div>
              <div>
                <p className="step-title active">Step one</p>
                <p className="step-desc bold">Register and pay ₹99</p>
              </div>
            </div>

            <div className="timeline-line"></div>

            {/* STEP 2 */}
            <div className="step-row">
              <div className="timeline-dot"></div>
              <div>
                <p className="step-title">Step two</p>
                <p className="step-desc">Get your Zoom link + mock test details</p>
              </div>
            </div>

            <div className="timeline-line"></div>

            {/* STEP 3 */}
            <div className="step-row">
              <div className="timeline-dot"></div>
              <div>
                <p className="step-title">Step three</p>
                <p className="step-desc">
                  Attend the live webinar and get your study roadmap
                </p>
              </div>
            </div>

            <p className="bottom-text">Simple, fast, high value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
