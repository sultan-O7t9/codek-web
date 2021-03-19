import React from "react";
import HeroSection from "./HeroSection";
import Spacer from "./Spacer";
import Services from "./Services";
import Platforms from "./Platforms";
import MissionAndHistory from "./MissionAndHistory";
import Team from "./Team";

const Main = () => {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Spacer height="16vh" background="var(--indigo)" />
      <HeroSection />
      <Spacer height="16vh" background="var(--white)" />
      <Services />
      <Spacer height="16vh" background="var(--white)" />
      <Platforms />
      <Spacer height="16vh" background="var(--white)" />
      <MissionAndHistory />
      <Spacer height="16vh" background="var(--white)" />
      <Team />
    </main>
  );
};

export default Main;
