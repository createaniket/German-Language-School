import React from "react";
import "./LogoStrip.css";

import LeftLogo from "../assets/images/Vector.svg";   // your first PNG
import RightLogo from "../assets/images/logo.png"; // your second PNG
import CrossIcon from "../assets/images/x.svg"; // OR you can use plain "×" text

export default function LogoStrip() {
  return (
    <div className="logo-strip">
      {/* LEFT LOGO */}
      <img src={LeftLogo} alt="Left Logo" className="logo-img" />

      {/* CENTER X */}
      {/* If using SVG:  */}
      <img src={CrossIcon} alt="x" className="cross-icon" />

      {/* If you want a TEXT X instead, replace above with:
      <span className="cross-text">×</span>
      */}

      {/* RIGHT LOGO */}
      <img src={RightLogo} alt="Right Logo" className="logo-img" />
    </div>
  );
}
