import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const rawData = this.props.animationData;
    // clone and remove any white solid layers to avoid a white background
    let animationData = rawData;
    try {
      animationData = JSON.parse(JSON.stringify(rawData));
      if (Array.isArray(animationData.layers)) {
        animationData.layers = animationData.layers.filter((layer) => {
          if (layer && layer.ty === 1 && layer.sc) {
            const color = String(layer.sc).toLowerCase();
            return color !== "#ffffff" && color !== "white";
          }
          return true;
        });
      }
    } catch (e) {
      animationData = rawData;
    }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie animationData={defaultOptions.animationData} loop={defaultOptions.loop} />
      </Suspense>
    );
  }
}
