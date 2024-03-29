import React, { useEffect } from "react";
import TeamMember from "./TeamMember";
import Spacer from "./Spacer";
import empImg from "../assets/img/avatar-02-140x140.png";
import empImg2 from "../assets/img/avatar-05-140x140.png";
import empImg3 from "../assets/img/avatar-06-140x140.png";
import hamzaImg from "../assets/img/hamza.jpeg";
import afaqImg from "../assets/img/afaq.jpeg";
import mateenImg from "../assets/img/mateen.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const team = [
    {
      name: "Shahzaib Ishaq",
      job: "CEO",
      img: empImg,
      links: [{ hRef: "https://github.com/sh4hzaib/", icon: "fab fa-github" }],
    },
    {
      name: "Danish Ishaq",
      job: "CTO",
      img: empImg,
      links: [],
    },
    {
      name: "Afaq Aftab",
      job: "Sr. Backend Developer",
      img: afaqImg,
      links: [
        { hRef: "https://github.com/afaq-AA/", icon: "fab fa-github" },
        {
          hRef: "https://www.facebook.com/ch.afaq.7731",
          icon: "fab fa-facebook",
        },
        { hRef: "https://twitter.com/ch__afaq", icon: "fab fa-twitter" },
      ],
    },
    {
      name: "Sultan Muhammad",
      job: "Sr. Frontend Developer",
      img: empImg3,
      links: [
        { hRef: "https://github.com/sultan-O7t9/", icon: "fab fa-github" },
      ],
    },
    {
      name: "Hamza Shabeer",
      job: "Jr. Mobile App Developer",
      img: hamzaImg,
      links: [],
    },
    {
      name: "Mateen Dar",
      job: "Jr. Mobile App Developer",
      img: mateenImg,
      links: [
        {
          hRef: "https://www.facebook.com/mateen.dar.73",
          icon: "fab fa-facebook",
        },
      ],
    },
    {
      name: "Muhammad Adeel",
      job: "Jr. Mobile App Developer",
      img: empImg,
      links: [],
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
