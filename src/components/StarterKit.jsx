import React from "react";
import "./StarterKit.css";
import CheckIcon from "../assets/images/check.svg"; // replace with your icon

export default function StarterKit() {
  const items = [
    {
      title: "Mini Mock Test + Level Assessment",
      desc: "Identify your current German level with a guided assessment",
      price: "Worth ₹999",
    },
    {
      title: "Personalised A1 to B2 Study Plan",
      desc: "Your ninety day plan to progress fast and avoid mistakes",
      price: "Worth ₹1,500",
    },
    {
      title: "Exam Preparation Strategy (Goethe Focused)",
      desc: "Get the strategy most students take months to figure out",
      price: "Worth ₹1,000",
    },
    {
      title: "Beginner Resource Pack",
      desc: "Free worksheets, recommended books, apps and tools",
      price: "Worth ₹700",
    },
    {
      title: "Do’s & Don’ts Cheat Sheet",
      desc: "Avoid the most common mistakes beginners make",
      price: "Worth ₹300",
    },
    {
      title: "Live Q&A With Expert",
      desc: "Get answers to your real doubts in the session",
      price: "Worth ₹600",
    },
    {
      title: "Bonus: Career & Germany Pathway Guidance",
      desc: "Given only if relevant to your background",
      price: "Bonus Value ₹500",
    },
  ];

  return (
    <section className="starter-wrapper">
      <h2 className="starter-heading">
        A Complete German Learning Starter Kit <br />
        <span className="purple-text">Worth ₹5,500+ for Just ₹99 —</span>
        <span>
Total No Brainer
        </span>
      </h2>

      <p className="sub-head">What You Get Inside The Webinar (Worth ₹5,500+)</p>

      <div className="starter-grid">
        {items.map((item, i) => (
          <div className="starter-card" key={i}>
            <div className="card-top">
              <img src={CheckIcon} alt="" className="check-icon" />
              <h3>{item.title}</h3>
            </div>

            <p className="desc">{item.desc}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}

        {/* TOTAL BOX INSIDE GRID */}
        <div className="starter-total-box">
          <h3>Total Value: ₹5,500+</h3>
          <p>Your Price Today: ₹99*</p>
        </div>
      </div>
    </section>
  );
}
