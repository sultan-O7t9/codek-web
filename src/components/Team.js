import React from "react";
import TeamMember from "./Container/TeamMember";
import Spacer from "./Spacer";
import empImg from "../assets/img/avatar-06-140x140.png";

const Team = () => {
  const team = [
    {
      name: "John Doe",
      job: "Designer",
      img: empImg,
      links: [
        { hRef: "google.com", icon: "fab fa-instagram" },
        { hRef: "google.com", icon: "fab fa-facebook" },
        { hRef: "google.com", icon: "fab fa-twitter" },
      ],
    },
    {
      name: "John Doe",
      job: "Designer",
      img: empImg,
      links: [
        { hRef: "google.com", icon: "fab fa-instagram" },
        { hRef: "google.com", icon: "fab fa-facebook" },
        { hRef: "google.com", icon: "fab fa-twitter" },
      ],
    },
    {
      name: "John Doe",
      job: "Designer",
      img: empImg,
      links: [
        { hRef: "google.com", icon: "fab fa-instagram" },
        { hRef: "google.com", icon: "fab fa-facebook" },
        { hRef: "google.com", icon: "fab fa-twitter" },
      ],
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
      <p style={{ fontWeight: "bold", color: "var(--white)" }}>
        <br />
        Cooperation unifies the best team mates.
        <br />
        <br />
      </p>
      {/* <div style={{"width": "100vw",height: "4vh",color: "rgba(0,0,0,0)"}}></div> */}
      <Spacer height="4vh" background="rba(0,0,0,0)" />

      <div className="d-flex justify-content-center flex-wrap justify-content-sm-center justify-content-md-center justify-content-lg-center">
        {/* <div className="card" style={{ borderRadius: "5px", margin: "1rem" }}>
          <div
            className="card-body d-flex d-lg-flex flex-column align-items-center justify-content-lg-center align-items-lg-center"
            style={{ padding: "1.8rem 2rem", margin: "0" }}
          >
            <img
              alt=""
              src="assets/img/avatar-06-140x140.png"
              style={{ width: "140px", height: "140px" }}
            />
            <h3
              className="text-muted card-subtitle mb-2"
              style={{
                margin: "1rem 0",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              John Doe
            </h3>
            <p style={{ color: "var(--gray)" }}>Designer</p>
            <div
              className="btn-group d-lg-flex justify-content-lg-center align-items-lg-center"
              role="group"
            >
              <a
                href="inex.html"
                className="btn btn-primary"
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  background: "var(--white)",
                  color: "var(--secondary)",
                  margin: "10px",
                }}
              >
                X
              </a>
              <a
                href="inex.html"
                className="btn btn-primary"
                style={{
                  width: "3rem",
                  height: "3rem",
                  "border-radius": "50%",
                  border: "1px solid #ccc",
                  background: "var(--white)",
                  color: "var(--secondary)",
                  margin: "10px",
                }}
              >
                X
              </a>
              <a
                href="inex.html"
                className="btn btn-primary"
                style={{
                  width: "3rem",
                  height: "3rem",
                  "border-radius": "50%",
                  border: "1px solid #ccc",
                  background: "var(--white)",
                  color: "var(--secondary)",
                  margin: "10px",
                }}
              >
                X
              </a>
            </div>
          </div>
        </div> */}
        {team.map((mmbr) => {
          return <TeamMember member={mmbr} />;
        })}
        {/*  */}
      </div>
      <div style={{ width: "100vw", height: "12vh", color: "inherit" }}></div>
    </section>
  );
};

export default Team;
