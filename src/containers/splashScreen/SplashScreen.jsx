import React, { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <svg
          className="splash-svg"
          role="img"
          aria-label={greeting.username}
          viewBox="0 0 800 120"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="splashGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#64FFDA" />
              <stop offset="50%" stopColor="#5B8DEF" />
              <stop offset="100%" stopColor="#64FFDA" />
            </linearGradient>
            <clipPath id="textClip">
              <rect className="clip-rect" x="0" y="0" width="800" height="120" />
            </clipPath>
          </defs>
          <text
            x="50%"
            y="72"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="'Space Grotesk', 'Inter', sans-serif"
            fontSize="96"
            fontWeight="700"
            fill="url(#splashGradient)"
            clipPath="url(#textClip)"
          >
            {greeting.username}
          </text>
        </svg>
      </div>
    </div>
  );
}
