import React from "react";
import "../App.css";
import UseScrollVisible from "./trasitions/UseScrollVisible";

function Prewedding() {
  const elementId = "footer-section";
  const isVisible = UseScrollVisible(elementId);

  return (
    <div
      id={elementId}
      className={`relative md:min-h-screen ${
        isVisible ? "slide-in-cover active" : "slide-in-cover"
      }`}
    >
      <img
        src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150841/invaite/prewedding.jpg"
        alt=""
        className="prewedding"
      />
    </div>
  );
}

export default Prewedding;
