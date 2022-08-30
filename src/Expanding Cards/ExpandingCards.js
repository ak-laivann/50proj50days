import React from "react";

import "./ExpandingCards.css";

const ExpandingCards = () => {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      handleClick();
      removeActiveClasses();
    });
  });
  function handleClick() {
    panel.forEach((panel) => {
      panel.classList.add(".active");
    });
  }
  function removeActiveClasses() {
    panel.forEach((panel) => {
      panel.classList.remove(".active");
    });
  }
  const bgImg =
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="container">
      <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}></div>
    </div>
  );
};

export default ExpandingCards;
