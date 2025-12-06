import React from "react";
import "./InsideWebinar.css";

import webinarImg from "../assets/images/insideweb.png"; // change to your image path



export default function InsideWebinar() {
  const wb_points = [
    "Understanding A1, A2, B1 and B2",
    "Which level you should start",
    "How long each level takes",
    "Common mistakes and how to avoid them",
    "Exam preparation strategy",
    "How to study effectively with limited time",
    "Mini mock test + resources"
  ];

  return (
    <section className="wb_container">
      <div className="wb_left">
        <img src={webinarImg} alt="Webinar" className="wb_img" />
      </div>

      <div className="wb_right">
        <h2 className="wb_title">Inside The Webinar</h2>
        <p className="wb_sub">What We Cover In Thirty Minutes</p>

        <ul className="wb_list">
          {wb_points.map((item, index) => (
            <li key={index} className="wb_list_item">
      <span className="wb_outer_dot">
  <span className="wb_inner_dot"></span>
</span>

              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
