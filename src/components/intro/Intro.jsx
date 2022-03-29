import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-body">Hello, My name is</h2>
          <h2 className="intro-name">Morteza Khojasteh</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
            </div>
          </div>
          <div className="intro-description">
            I’ve completed my full-stack web development course, I’m ready to
            contribute to what’s your vision in your company, I have lots of
            experience I’ve gained throughout 8 months of my training
          </div>
        </div>
      </div>
      <div className="intro-right">Right</div>
    </div>
  );
};

export default Intro;
