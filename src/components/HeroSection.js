import React from "react";
import heroSection from "../assets/img/heroSection.png";
import WaveAnimation from "./WaveAnimation";
import "../assets/css/styles.css";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const is1150 = useMediaQuery({ minWidth: "1150px" });
  const isIPADpro = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceHeight: "1300px",
  });
  const isIPAD = useMediaQuery({ maxWidth: "768px" });
  const is576 = useMediaQuery({ maxWidth: "576px" });
  const isMobile = useMediaQuery({ maxWidth: "400px" });
  return (
    <section
      className="section "
      data-title="HOME"
      style={{
        minHeight: is1150
          ? "80vh"
          : isIPADpro
          ? "50vh"
          : isIPAD
          ? "70vh"
          : "80vh",
        height: isMobile || isIPAD || is576 || isIPADpro ? "auto" : "110vh",
        background: "var(--indigo)",
        position: "relative",
      }}
    >
      <div
        className="d-flex "
        style={{
          flexDirection: isIPAD ? "column" : "initial",
          margin: is576?"0":"3rem 0",
        }}
      >
        <div
          className="d-lg-flex justify-content-lg-end align-items-lg-start d-xl-flex justify-content-xl-end align-items-xl-start"
          style={{
            minHeight: "30vw",
            width: isIPAD ? "100vw" : "50%",
          }}
        >
          <div
            style={{
              width: "90%",
              height:isMobile?"auto":"100%",
              color: "rgba(249,245,245,0.1)",
              margin: is576 ? "auto" : "1rem",
              marginLeft: isIPAD?"auto":"2rem",
              display: isIPAD ? "flex" : "initial",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                borderColor: "var(--white)",
                margin: isMobile||is576?"1.5rem 0":"1.5rem 0",
                color: "var(--white)",
                // height: isMobile?"100px":"200px",
                fontSize: is576?"2.5rem":isMobile ? "2.5rem" : "3rem",
                fontWeight: "bold",
                maxWidth: isIPAD ? "100vw" : "400px",
                paddingBottom: "0",
                textAlign: isIPAD ? "center" : "initial",
              }}
            >
              <br />
              Get Your Business
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
                textAlign: isIPAD ? "center" : "initial",
              }}
            >
              Our cohesive team creates intelligent and immersive digital
              experiences
              <br />
              <br />
            </p>
            <a
              href="#contact"
              
                style={{
                  // display:"flex",
                  padding: "1rem 2.25rem",
                  height:"60px",
                  width:"auto",
                  maxWidth:"170px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  fontWeight: "bold",
                }}
              className="btn btn-primary hero-section-cta">
              Get Started
            </a>
          </div>
        </div>
        <div
          className="d-lg-flex justify-content-lg-end align-items-lg-center"
          style={{
            height: "50vw",
            width: isIPAD ? "100vw" : "50%",
            display: "flex",
            justifyContent: isIPAD ? "center" : "end",
          }}
        >
          <div
            style={{
              marginTop: "16vh",
              width: "90%",
              color: "rgba(249,245,245,0.1)",
              height: "50vw",
              display: isIPAD ? "flex" : "initial",
              justifyContent: "center",
            }}
          >
            <img
              src={heroSection}
              alt=""
              className="elementToAnimateTwo"
              style={{
                position: "relative",
                zIndex: "3",
                width: isIPAD ? "auto" : "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <WaveAnimation />
      <div
        id="services"
        style={{
          background: "rgba(0,0,0,0)",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "86px",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
