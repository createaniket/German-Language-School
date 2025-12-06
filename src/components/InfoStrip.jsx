// InfoStrip.jsx
import React from "react";
import "./InfoStrip.css";

export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="left-text">
        This session brings the clarity most <br />
        students don’t get for months.
      </div>

      <div className="mid-text">
        Career guidance will be provided as a free add on, only if relevant to 
        your goals. It is not the main purpose of the webinar.
      </div>

      <button className="cta-btn">Book your seat now</button>
    </div>
  );
}
