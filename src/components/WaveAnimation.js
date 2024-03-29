import React from "react";
import "../assets/css/wave.css";

const WaveAnimation = () => {
  return (
    <div className="positioning-container">
      <svg className="wave-svg" viewBox="0 0 120 28">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9"
              result="goo"
            />
            <xfeBlend in="SourceGraphic" in2="goo" />
          </filter>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>
        <use id="wave2" className="wave" href="#wave" x="0" y="0"></use>

        <g className="gooeff" filter="url(#goo)"></g>
      </svg>
    </div>
  );
};

export default WaveAnimation;
