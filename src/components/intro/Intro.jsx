import React from "react";
import "./intro.css";
import Photo from "../../img/my-photo.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-body">Hello, My name is</h2>
          <h2 className="intro-name">Morteza Khojasteh</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Full Stack Developer</div>
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="intro-desc">
            <p>Welcome to my page,</p>I am a <b>Full Stack Web Developer</b>.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg">
          <img src={Photo} alt="" className="intro-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
