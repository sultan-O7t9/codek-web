import React from "react";
import { useMediaQuery } from "react-responsive";
import "../assets/css/styles.css";

const MissionAndHistoryInnerComponent = ({ content }) => {
  const isMobile = useMediaQuery({ maxWidth: "400px" });
  return (
    <div
      className=" fade-in d-flex d-sm-flex d-md-flex d-lg-flex flex-row align-items-start flex-wrap justify-content-sm-center align-items-lg-center"
      style={{ padding: "2rem 1rem", marginBottom: "3rem" }}
    >
      <div
        className="d-flex msn-img-container"
        style={{ width: isMobile ? "100vw" : "50%" }}
      >
        <img
          className="d-sm-flex elementToAnimate"
          src={content.imgSrc}
          alt=""
          style={{ width: "80%" }}
        />
      </div>
      <div
        style={{
          width: isMobile ? "100vw" : "45%",
          marginTop: isMobile ? "1rem" : "1rem",
          textAlign: isMobile ? "center" : "initial",
        }}
      >
        <p
          style={{
            maxWidth: "390px",
            marginLeft: isMobile ? "0" : "1.2rem",
            color: "var(--gray)",
          }}
        >
          {content.title}
          <br />
          <br />
        </p>
        <ul
          style={{
            marginBottom: "2.2rem",
            marginRight: isMobile ? "0" : "2.2rem",
          }}
        >
          {content.list.map((listItem, index) => {
            return (
              <li key={index} style={{ color: "var(--gray)" }}>
                {listItem.text}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MissionAndHistoryInnerComponent;
