import React from "react";

const MissionAndHistoryInnerComponent = ({ content }) => {
  return (
    <div
      className=" d-flex d-sm-flex d-md-flex d-lg-flex flex-row align-items-start flex-wrap justify-content-sm-center align-items-lg-center"
      style={{ padding: "2rem 1rem" }}
    >
      <div className="d-sm-flex" style={{ width: "55%" }}>
        <img
          className="d-sm-flex elementToAnimate"
          src={content.imgSrc}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ width: "45%" }}>
        <p
          style={{
            maxWidth: "390px",
            marginLeft: "1.2rem",
            color: "var(--gray)",
          }}
        >
          {content.title}
          <br />
          <br />
        </p>
        <ul style={{ marginBottom: "2.2rem", marginRight: "2.2rem" }}>
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
