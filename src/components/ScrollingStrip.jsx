import React from "react";
import "./ScrollingStrip.css";

export default function ScrollingStrip() {
  const items = [
    "Limited Seats Only",
    "A1–B1 Fast Track",
    "No Questions Asked Refund Policy",
    "Flat 90% off",
    "Expert Trainers",
  ];

  return (
    <div className="strip-wrapper">
      <div className="scroll-container">
        <div className="scroll-content">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="dot">✶</span>
            </React.Fragment>
          ))}

          {/* Duplicate for infinite looping */}
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span>{item}</span>
              <span className="dot">✶</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
