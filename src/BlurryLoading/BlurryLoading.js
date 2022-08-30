import React, { useState, useEffect } from "react";
import "./BlurryLoading.css";

const BlurryLoading = () => {
  const [text, setText] = useState(0);

  const LoadText = document.querySelector(".loading-text");

  const Bg = document.querySelector(".bg");

  function TextFunc() {
    setText((text) => text + 10);
    if (text > 110) {
      return;
    }
    LoadText.style.opacity = scale(text, 0, 90, 1, 0);
    Bg.style.filter = `blur(${scale(text, 0, 90, 30, 0)}px)`;
  }

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  return (
    <div className="container">
      <section className="bg" style={{ filter: `blur(20px)` }}></section>
      <div className="loading-text" onClick={TextFunc}>{`${text}%`}</div>
    </div>
  );
};

export default BlurryLoading;
