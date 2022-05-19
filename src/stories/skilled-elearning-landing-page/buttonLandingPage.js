import React from "react";
import "./buttonLandingPage.scss";

export const ButtonLandingPage = ({background}) => {
  console.log(background);
  return (
    <button className="idle1" style={{background : background}}>
      Get Started
    </button>
  );
};


