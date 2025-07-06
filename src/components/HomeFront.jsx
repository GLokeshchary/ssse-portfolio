import React from "react";
import "./HomeFront.css";
const HomeFront = () => {
  return (
    <div className="front-container">
      <div className="front-name">
        <span>SRI</span>
        <span>SHIRIDI SAI</span>
        <span>ENTERPRISES</span>
      </div>
      <span>Your Trusted Distribution Partner</span>
      <div
        className="scroll-prompt"
        aria-label="Scroll down prompt"
        role="note"
      >
        Scroll Down
      </div>
    </div>
  );
};

export default HomeFront;
