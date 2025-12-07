import React from "react";
import Slider from "react-slick";
import "./TeamSection.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/images/arun.png";
import img2 from "../assets/images/kashish.png";
import img3 from "../assets/images/riya.png";
import img4 from "../assets/images/tanya.png";
import img5 from "../assets/images/nidhi.png";
import img6 from "../assets/images/monshika.png";

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
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,            // continuous autoplay
    speed: 9000,                 // ⭐ SLOW, SMOOTH SPEED (increase to slow more)
    cssEase: "linear",

    slidesToShow: 5,
    slidesToScroll: 1,

    rtl: false,                   // ⭐ RIGHT → LEFT
    swipeToSlide: true,
    draggable: true,             // ⭐ pointer drag
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="team-slider">
      <Slider {...settings}>
        {members.map((m, index) => (
          <div className="team-slide" key={index}>
            <div className="team-card">
              <div
                className="team-card-top"
                style={{ backgroundColor: colors[index] }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className={`team-photo ${
                    m.name === "Mokshika" ? "fix-mokshika" : ""
                  }`}
                />
              </div>

              <div
                className="team-card-bottom"
                style={{ borderColor: colors[index] }}
              >
                <h3 className="team-name">{m.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
