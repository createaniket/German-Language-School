import React, { useEffect } from "react";
import "./ThankYou.css";

export default function ThankYou() {

  useEffect(() => {
    // Fire Meta Purchase Event
    if (window.fbq) {
      window.fbq("track", "Purchase", {
        value: 99,     // Change to your price if needed
        currency: "INR"
      });
    }
  }, []);

  return (
    <div className="thankyou-wrapper">
      <h1 className="thankyou-title">Thank You!</h1>
      <p className="thankyou-text">
        Your registration was successful. We will contact you soon.
      </p>
    </div>
  );
}