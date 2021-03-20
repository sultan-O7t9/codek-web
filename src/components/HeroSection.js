import React from "react";
import heroSection from "../assets/img/heroSection.png";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      style={{ width: "100", height: "auto", background: "var(--indigo)" }}
    >
      <div className="d-flex">
        <div
          className="d-lg-flex justify-content-lg-end align-items-lg-start"
          style={{ width: "50%", height: "auto", "min-height": "50vw" }}
        >
          <div
            style={{
              width: "90%",
              color: "rgba(249,245,245,0.1)",
              margin: "1rem",
              "margin-left": "2rem",
            }}
          >
            <h1
              style={{
                "border-color": "var(--white)",
                margin: "0px",
                color: "var(--white)",
                height: "200px",
                "font-size": "3rem",
                "font-weight": "bold",
                "max-width": "400px",
                "padding-bottom": "0",
              }}
            >
              <br />
              Get Your Sites
              <br />A Kickstart Now!
              <br />
              <br />
            </h1>
            <p
              style={{
                margin: "0px",
                color: "var(--white)",
                "font-weight": "normal",
                "line-height": "24px",
                "max-width": "400px",
                padding: "0",
              }}
            >
              <br />
              There’s no need to be a technical professional to create sites
              with AeroLand. With simple guides, everything is easy!
              <br />
              <br />
            </p>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                padding: "1rem 2.25rem",
                "font-weight": "bold",
                background: "RGB(56, 202, 137)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div
          className="d-lg-flex justify-content-lg-end align-items-lg-center"
          style={{ width: "50%", height: "50vw" }}
        >
          <div
            style={{
              width: "90%",
              color: "rgba(249,245,245,0.1)",
              height: "50vw",
            }}
          >
            <img
              src={heroSection}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
