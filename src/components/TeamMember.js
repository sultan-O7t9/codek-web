import React from "react";
import "../assets/css/styles.css";

const TeamMember = ({ member }) => {
  return (
    <div
      className="card"
      style={{ width: "300px", borderRadius: "5px", margin: "1rem" }}
    >
      <div
        className="card-body d-flex d-lg-flex flex-column align-items-center justify-content-lg-center align-items-lg-center"
        style={{ padding: "1.8rem 2rem", margin: "0" }}
      >
        <img
          alt=""
          src={member.img}
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
          {member.name}
        </h3>
        <p style={{ color: "var(--gray)" }}>{member.job}</p>
        <div
          className="btn-group d-lg-flex justify-content-lg-center align-items-lg-center"
          role="group"
        >
          {member.links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.hRef}
                className="btn btn-primary team-mmbr-icon-link"
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  margin: "10px",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i className={link.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
