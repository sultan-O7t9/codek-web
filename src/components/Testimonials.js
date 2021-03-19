import React from "react";
import Spacer from "./Spacer";

const Testimonials = () => {
  return (
    <section
      className="d-flex flex-column align-items-center align-items-sm-center align-items-md-center align-items-lg-center"
      style={{ background: "RGB(246, 247, 252)" }}
    >
      {/* <div className="d-flex justify-content-center" style={{ "width: 100vw;height: 12vh;color: inherit;"}}></div> */}
      <Spacer height="12vh" background="rgba(0,0,0,0)" />
      <h1
        className="text-center"
        style={{
          "font-size": "2.625rem",
          "min-width": "auto",
          "max-width": "700px",
          color: "RGB(47, 50, 129)",
          "font-weight": "bold",
        }}
      >
        A reliable top-rated company
      </h1>
      <p
        className="d-flex justify-content-center"
        style={{
          "font-weight": "bold",
          color: "var(--gray)",
          "margin-bottom": "2rem",
          "text-align": "center",
        }}
      >
        We deliver the best services for app design &amp; coding
      </p>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          padding: "1rem 1.6rem",
          "border-radius": "5px",
          background:
            "linear-gradient(45deg, RGB(100, 100, 232), RGB(151, 120, 241)), #7c82fe",
          "font-weight": "bold",
          "letter-spacing": "1px",
          "font-size": "15px",
          "border-color": "#888888",
          "margin-left": "1.2rem",
        }}
      >
        What clients say about us
      </button>
      {/* <div style={{ "width": "100vw", "height": "12vh", "color": "inherit" }}></div> */}
      <Spacer height="12vh" background="rgba(0,0,0,0)" />
    </section>
  );
};

export default Testimonials;
