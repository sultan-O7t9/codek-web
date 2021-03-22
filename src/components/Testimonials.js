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
          fontSize: "2.625rem",
          minWidth: "auto",
          maxWidth: "700px",
          color: "RGB(47, 50, 129)",
          fontWeight: "bold",
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
          fontWeight: "bold",
          color: "var(--gray)",
          marginBottom: "2rem",
          textAlign: "center",
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
        style={{}}
      >
        What clients say about us
      </button>
      <Spacer height="12vh" background="rgba(0,0,0,0)" />
    </section>
  );
};

export default Testimonials;
