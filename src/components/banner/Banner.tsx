import "./Banner.scss";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import AwesomeSlider, { AwesomeSliderProps } from "react-awesome-slider";

import React from "react";
import bojack from "../../assets/images/bojack-0.png";
import nature from "../../assets/images/nature.jpg";
import web from "../../assets/images/web.jpg";

const config: AwesomeSliderProps = {
  infinite: true,
  startup: true,
  animation: 'cube-animation',
  startupScreen: <div>Welcome</div>,
  buttons: true,
  media: [
    {
      source: bojack,
    },
    {
      source: web,
    },
    {
      source: nature,
    },
    {
      source: bojack,
    },
    {
      source: web,
    },
    {
      source: nature,
    },
  ],
};
export default function Banner() {
  return (
    <div className="banner-container">
      <AwesomeSlider {...config}/>
    </div>
  );
}
