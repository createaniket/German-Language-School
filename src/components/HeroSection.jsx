import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/images/second.png"; // replace with your image path

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        <h1>
          Most Beginners Start <br />
          German Wrong & Waste <br />
          Months
        </h1>

        <p className="hero-desc">
          Many learners pick the wrong level, follow the wrong strategy, or study
          without a proper plan. They get stuck between levels, fail mock tests,
          or lose confidence before exams.
        </p>

        <div className="hero-lists">
          <ul className="custom-list">
            <li>Should I start from A1 even if I know basics</li>
            <li>What is the right order for A1, A2, B1 and B2</li>
            <li>How do I study effectively with limited time</li>
          </ul>

          <ul className="custom-list">
            <li>How much time does each level take</li>
            <li>How do I avoid failing the Goethe exam</li>
          </ul>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImg} alt="German Learning" className="hero-image" />

        <div className="floating-box">
          This webinar gives you a clear, structured path to learn German the
          right way.
        </div>
      </div>
    </section>
  );
}
