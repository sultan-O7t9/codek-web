import React from "react";
import heroSection from "../assets/img/heroSection.png";
import WaveAnimation from "./WaveAnimation";
import "../assets/css/styles.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        width: "100",
        height: "auto",
        background: "var(--indigo)",
        position: "relative",
      }}
    >
      <div className="d-flex hero-section-container">
        <div
          className="d-lg-flex justify-content-lg-end align-items-lg-start hero-section-heading-container"
          style={{ height: "auto", minHeight: "30vw" }}
        >
          <div
            className="hero-section-heading-inner-container"
            style={{
              width: "90%",
              color: "rgba(249,245,245,0.1)",
              margin: "1rem",
            }}
          >
            <h1
              className="hero-section-heading"
              style={{
                borderColor: "var(--white)",
                margin: "0px",
                color: "var(--white)",
                height: "200px",
                fontSize: "3rem",
                fontWeight: "bold",
                maxWidth: "400px",
                paddingBottom: "0",
              }}
            >
              <br />
              Get Your Sites
              <br />A Kickstart Now!
              <br />
            </h1>
            <p
              style={{
                margin: "0px",
                color: "var(--white)",
                fontWeight: "normal",
                lineHeight: "24px",
                maxWidth: "400px",
                padding: "0",
              }}
            >
              <br />
              There’s no need to be a technical professional to create sites
              with AeroLand. With simple guides, everything is easy!
              <br />
              <br />
            </p>
            <a
              href="index.html"
              className="btn btn-primary hero-section-cta"
              style={{
                padding: "1rem 2.25rem",
                fontWeight: "bold",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
        <div
          className="d-lg-flex hero-section-img-continer justify-content-lg-end align-items-lg-center"
          style={{ height: "50vw" }}
        >
          <div
            style={{
              marginTop: "16vh",
              width: "90%",
              color: "rgba(249,245,245,0.1)",
              height: "50vw",
            }}
          >
            <img
              src={heroSection}
              alt=""
              className="elementToAnimateTwo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <WaveAnimation />
    </section>
  );
};

export default HeroSection;
