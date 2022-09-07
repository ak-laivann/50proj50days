import React from "react";
import "./ScrollingAnimation.css";

function ForBox() {
  let arr = [];
  for (let i = 0; i < 15; i++) {
    arr.push(
      <div key={i} className="box">
        <h2>Content</h2>
      </div>
    );
  }
  return arr;
}

const ScrollingAnimation = () => {
  document.title = "Scrolling animation";

  window.addEventListener("scroll", () => checkBoxes());

  function checkBoxes() {
    const boxes = document.querySelectorAll(".box");
    const triggerHeight = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const topPosition = box.getBoundingClientRect().top;
      if (topPosition < triggerHeight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  return (
    <div className="container">
      <h1> Scroll to see the animation </h1>
      <ForBox />
    </div>
  );
};

export default ScrollingAnimation;
