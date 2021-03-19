import React from "react";

const TeamMember = () => {
  return (
    <div className="card" style={{ borderRadius: "5px", margin: "1rem" }}>
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
    </div>
  );
};

export default TeamMember;
