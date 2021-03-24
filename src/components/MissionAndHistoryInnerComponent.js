import React from "react";
import "../assets/css/styles.css";

const MissionAndHistoryInnerComponent = ({ content }) => {
  return (
    <div
      className=" d-flex d-sm-flex d-md-flex d-lg-flex flex-row align-items-start flex-wrap justify-content-sm-center align-items-lg-center"
      style={{ padding: "2rem 1rem" }}
    >
      <div className="d-sm-flex msn-img-container">
        <img
          className="d-sm-flex elementToAnimate"
          src={content.imgSrc}
          alt=""
          style={{ width: "80%" }}
        />
      </div>
      <div className="msn-content">
        <p
          style={{
            maxWidth: "390px",
            color: "var(--gray)",
          }}
        >
          {content.title}
          <br />
          <br />
        </p>
        <ul style={{ marginBottom: "2.2rem" }}>
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
