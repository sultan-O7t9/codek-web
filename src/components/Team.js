import React, { useEffect } from "react";
import TeamMember from "./TeamMember";
import Spacer from "./Spacer";
import empImg from "../assets/img/avatar-06-140x140.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const team = [
    {
      name: "John Doe",
      job: "Designer",
      img: empImg,
      links: [
        { hRef: "google.com", icon: "fab fa-github" },
        { hRef: "google.com", icon: "fab fa-reddit" },
        { hRef: "google.com", icon: "fab fa-twitter" },
      ],
    },
    {
      name: "John Doe",
      job: "Designer",
      img: empImg,
      links: [
        { hRef: "google.com", icon: "fab fa-trello" },
        { hRef: "google.com", icon: "fab fa-twitter" },
      ],
    },
    {
      name: "John Doe",
      job: "Designer",
      img: empImg,
      links: [{ hRef: "google.com", icon: "fab fa-instagram" }],
    },
  ];
  return (
    <section
      className="d-flex flex-column align-items-center align-items-sm-center align-items-md-center align-items-lg-center"
      style={{
        background:
          "linear-gradient(45deg, RGB(147, 146, 240) 0%, RGB(186, 162, 246)), var(--white)",
      }}
    >
      {/* <div className="d-flex justify-content-center" style={{"width": "100vw","height": "12vh",color: "inherit"}}></div> */}
      <Spacer height="16vh" background="rba(0,0,0,0)" />
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
        className="text-center"
        style={{
          fontSize: "2.625rem",
          minWidth: "auto",
          maxWidth: "700px",
          color: "var(--white)",
          fontWeight: "bold",
        }}
      >
        <br />
        Our experienced experts
      </h1>
      <p
        style={{ fontWeight: "bold", color: "var(--white)" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
      >
        <br />
        Cooperation unifies the best team mates.
        <br />
        <br />
      </p>
      {/* <div style={{"width": "100vw",height: "4vh",color: "rgba(0,0,0,0)"}}></div> */}
      <Spacer height="4vh" background="rba(0,0,0,0)" />

      <div
        className="d-flex justify-content-center flex-wrap justify-content-sm-center justify-content-md-center justify-content-lg-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
      >
        {team.map((mmbr, index) => {
          return <TeamMember key={index} member={mmbr} />;
        })}
        {/*  */}
      </div>
      <div style={{ width: "100vw", height: "12vh", color: "inherit" }}></div>
    </section>
  );
};

export default Team;
