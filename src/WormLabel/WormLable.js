import React from "react";

import "./WormLabel.css";

const WormLabel = () => {
  function EventListener() {
    const labels = document.querySelectorAll(".form-control label");

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map((letter) => `<span>${letter}</span>`)
        .join("");
    });
  }

  return (
    <>
      <div className="container">
        <div className="form-control" onMouseOver={EventListener}>
          <input type="text" required />
          <label>Emails</label>
        </div>

        <div className="form-control" onMouseOver={EventListener}>
          <input type="password" required />
          <label>Password</label>
        </div>

        <button className="btn">Login</button>

        <p className="text">
          Don't have an account?<a href="#">Register</a>
        </p>
      </div>
    </>
  );
};

export default WormLabel;
