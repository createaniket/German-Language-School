import React from "react";
import "./TeamSection.css";

import img1 from "../assets/images/arun.png";
import img2 from "../assets/images/kashish.png";
import img3 from "../assets/images/riya.png";
import img4 from "../assets/images/tanya.png";
import img5 from "../assets/images/nidhi.png";
import img6 from "../assets/images/monshika.png";

// Assign color per card like your design
const colors = ["#FFECEC", "#D9C7FF", "#FFECEC", "#D9C7FF", "#FFECEC", "#D9C7FF"];

const members = [
  { name: "Aruneshwar", img: img1 },
  { name: "Kashish", img: img2 },
  { name: "Riya Mahendru", img: img3 },
  { name: "Tanya Singh", img: img4 },
  { name: "Nidhi Gupta", img: img5 },
  { name: "Mokshika", img: img6 },
];


export default function TeamSection() {
  return (
    <section className="team-grid">
      {members.map((m, index) => (
        <div className="team-card" key={index}>
          <div
            className="team-card-top"
            style={{ backgroundColor: colors[index] }}
          >
        <img
  src={m.img}
  alt={m.name}
  className={`team-photo ${m.name === "Mokshika" ? "fix-mokshika" : ""}`}
/>

          </div>

          <div
            className="team-card-bottom"
            style={{ borderColor: colors[index] }}
          >
            <h3 className="team-name">{m.name}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}