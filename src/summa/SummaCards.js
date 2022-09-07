import React from "react";

import "./SummaCards.css";

const SumaCards = () => {
  document.title = "Practicing";

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      handleClick();
      removeActiveClasses();
    });
  });

  function removeActiveClasses() {
    panel.forEach((panel) => {
      panel.classList.remove(".active");
    });
  }

  function handleClick() {
    panel.forEach((panel) => {
      panel.classList.add(".active");
    });
  }

  const bgImg =
    "https://images.unsplash.com/photo-1543252358-f20f9c57bafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

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

export default SumaCards;
