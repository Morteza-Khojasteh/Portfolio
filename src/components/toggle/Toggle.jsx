import React from "react";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

const Toggle = () => {
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div className="toggle-button"></div>
    </div>
  );
};

export default Toggle;
