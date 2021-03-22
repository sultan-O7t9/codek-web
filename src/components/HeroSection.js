import React from "react";
import heroSection from "../assets/img/heroSection.png";
import "../assets/css/styles.css";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      style={{
        width: "100",
        height: "auto",
        background: "var(--indigo)",
        position: "relative",
      }}
    >
      <div className="d-flex">
        <div
          className="d-lg-flex justify-content-lg-end align-items-lg-start"
          style={{ width: "50%", height: "auto", minHeight: "50vw" }}
        >
          <div
            style={{
              width: "90%",
              color: "rgba(249,245,245,0.1)",
              margin: "1rem",
              marginLeft: "2rem",
            }}
          >
            <h1
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
              className="elementToAnimate"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
