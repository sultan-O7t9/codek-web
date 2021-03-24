import React from "react";
import HeroSection from "./HeroSection";
import Spacer from "./Spacer";
import Services from "./Services";
import Platforms from "./Platforms";
import MissionAndHistory from "./MissionAndHistory";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <main
        style={{
          overflowX: "hidden",
          background: "white",
        }}
      >
        <Spacer id="hero-section" height="4vh" background="var(--indigo)" />
        <HeroSection />
        <Spacer height="4vh" id="services" background="var(--white)" />
        <Services />
        <Spacer
          id="platforms"
          classes="main-spacer"
          height="20vh"
          background="var(--white)"
        />
        <Platforms />
        <Spacer
          height="20vh"
          classes="main-spacer"
          id="msn-hstry"
          background="var(--white)"
        />
        <MissionAndHistory />
        <Spacer
          height="20vh"
          classes="main-spacer"
          id="team"
          background="rgba(0,0,0,0)"
        />
        <Team />
        <Spacer
          height="20vh"
          classes="main-spacer"
          id="testimonials"
          background="var(--white)"
        />
        <Testimonials />
        <Spacer
          height="20vh"
          classes="main-spacer"
          id="contact"
          background="var(--white)"
        />
        <Contact />
        <Spacer height="20vh" classes="main-spacer" background="var(--white)" />
      </main>
    </>
  );
};

export default Main;
