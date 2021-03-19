import React, { useState } from "react";
import MissionAndHistoryInnerComponent from "./MissionAndHistoryInnerComponent";
import missionImg from "../assets/img/aeroland-tab-content-image-04.png";
import hitoryImg from "../assets/img/aeroland-tab-content-image-05.png";

const MissionAndHistory = () => {
  const [isHistory, setIsHistory] = useState(true);

  const notSelectedBtn = {
    margin: "0 2rem",
    padding: "1.2rem 2rem",
    borderRadius: "5px",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "15px",
    background: "var(--white)",
    color: "var(--gray)",
    borderColor: "RGB(237, 237, 237)",
  };
  const selectedBtn = {
    ...notSelectedBtn,
    background: "#7c82fe",
    borderColor: "#888888",
    color: "white",
  };

  const content = [
    {
      type: "history",
      title:
        "Over 10 years of operating in Marketing, we have grown into a top-rated company.",
      list: [
        { text: "Design responsive modern websites" },
        { text: "Redesign or revise design of outdated websites" },
        { text: "Develop useful features and functions" },
        { text: "Check for code error and bug issues" },
      ],
      imgSrc: hitoryImg,
    },
    {
      type: "mission",
      title:
        "Over x years of operating in Marketing, we have grown into a top-rated company.",
      list: [
        { text: "Design responsive modern websites" },
        { text: "Redesign or revise design of outdated websites" },
        { text: "Develop useful features and functions" },
        { text: "Check for code error and bug issues" },
      ],
      imgSrc: missionImg,
    },
  ];

  let renderedComp = null;
  if (isHistory) {
    renderedComp = <MissionAndHistoryInnerComponent content={content[0]} />;
  } else {
    renderedComp = <MissionAndHistoryInnerComponent content={content[1]} />;
  }

  return (
    <section
      className="d-flex flex-column align-items-md-center align-items-lg-center"
      style={{ background: "var(--white);" }}
    >
      <h1
        className="text-center"
        style={{
          fontSize: "2.625rem",
          minWidth: "auto",
          maxWidth: "700px",
          fontWeight: "bold",
          color: "RGB(44, 48, 120)",
        }}
      >
        <br />
        We design powerful websites for landing your success.
        <br />
        <br />
      </h1>
      <div style={{ minHeight: "100px", width: "100%" }}>
        <div
          className="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center align-items-lg-center"
          style={{ borderColor: "RGB(237, 237, 237)" }}
        >
          <div className="btn-group" role="group">
            <button
              onClick={() => {
                setIsHistory(true);
              }}
              className="btn btn-primary"
              type="button"
              style={isHistory ? selectedBtn : notSelectedBtn}
            >
              OUR HISTORY
            </button>
            <button
              onClick={() => {
                setIsHistory(false);
              }}
              className="btn btn-primary"
              type="button"
              style={!isHistory ? selectedBtn : notSelectedBtn}
            >
              OUR MISSION
            </button>
          </div>
        </div>
        {/*  */}
        {renderedComp}
        {/*  */}
      </div>
    </section>
  );
};

export default MissionAndHistory;
