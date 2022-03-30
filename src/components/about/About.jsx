import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
