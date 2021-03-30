import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import Spacer from "./Spacer";
import Services from "./Services";
import Platforms from "./Platforms";
import MissionAndHistory from "./MissionAndHistory";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const is1150 = useMediaQuery({ maxWidth: "1150px" });
  const isIPADproWidth = useMediaQuery({ maxDeviceWidth: "1024px" });
  const isIPADpro = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceHeight: "1300px",
  });
  const isIPAD = useMediaQuery({ maxWidth: "768px" });
  const is576 = useMediaQuery({ maxWidth: "576px" });
  const isMobile = useMediaQuery({ maxWidth: "400px" });

  return (
    <>
      <main
        style={{
          marginBottom: isMobile
            ? "100vh"
            : is576
            ? "100vh"
            : isIPAD
            ? "40vh"
            : isIPADproWidth
            ? "30vh"
            : "65vh",
          overflowX: "hidden",
          background: "white",
        }}
      >
        {/* <Spacer height={is576 ? "0" : "6vh"} background="var(--indigo)" /> */}
        <HeroSection />
        <Services />
        <Spacer
          id="technologies"
          classes="main-spacer"
          // height="12vh"
          height="86px"
          background="var(--white)"
        />
        <Platforms />
        <Spacer
          height="12vh"
          classes="main-spacer"
          id="msn-hstry"
          background="var(--white)"
        />
        <MissionAndHistory />
        <Spacer
          height="12vh"
          classes="main-spacer"
          id="team"
          background="rgba(0,0,0,0)"
        />
        <Team />
        <Spacer
          height="12vh"
          classes="main-spacer"
          id="testimonials"
          background="var(--white)"
        />
        <Testimonials />
        <Spacer
          height="86px"
          classes="main-spacer"
          id="contact"
          background="var(--white)"
        />
        <Contact />
        <Spacer height="12vh" classes="main-spacer" background="var(--white)" />
      </main>
    </>
  );
};

export default Main;
