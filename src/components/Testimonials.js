import React, { useEffect } from "react";
import Spacer from "./Spacer";
import "../assets/css/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="d-flex flex-column align-items-center align-items-sm-center align-items-md-center align-items-lg-center"
      style={{ background: "RGB(246, 247, 252)" }}
    >
      <Spacer height="12vh" background="rgba(0,0,0,0)" />
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
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
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
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
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
        className="btn btn-primary testimonial-btn"
        type="button"
        style={{
          padding: "1rem 1.6rem",
          borderRadius: "5px",
          background:
            "linear-gradient(45deg, RGB(100, 100, 232), RGB(151, 120, 241)), #7c82fe",
          fontWeight: "bold",
          letterSpacing: "1px",
          fontSize: "15px",
          borderColor: "#888888",
          marginLeft: "1.2rem",
        }}
      >
        What clients say about us
      </button>
      <Spacer height="12vh" background="rgba(0,0,0,0)" />
    </section>
  );
};

export default Testimonials;
