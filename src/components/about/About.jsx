import React from "react";
import "./about.css";
import MyPhoto from "../../img/about.jpg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={MyPhoto} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <p className="about-sub">I am a Full Stack Software Developer.</p>
        <p className="about-desc">
          I have recently graduated from CodeYourFuture. I have valuable
          experience with teamwork, communicating with tech and non-tech people,
          and can anticipate and be proactive about issues. I am passionate
          about researching and analysing multiple solutions before implementing
          them. It has been an exciting experience throughout the CYF course to
          be able to use my coding skills to build digital products that are
          fast, reliable, and engaging to use.
        </p>
      </div>
    </div>
  );
};

export default About;
