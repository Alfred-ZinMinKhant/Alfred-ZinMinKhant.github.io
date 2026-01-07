import React, { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import workFromHome from "../../assets/lottie/work from home.json";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={workFromHome} />
      </div>
      <div className="splash-title-container">
        <span className="splash-title">{greeting.username}</span>
      </div>
    </div>
  );
}
