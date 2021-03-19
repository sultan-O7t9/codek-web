import React from "react";

const MissionAndHistoryInnerComponent = ({ content }) => {
  return (
    <div
      className="d-flex d-sm-flex d-md-flex d-lg-flex flex-row align-items-start flex-wrap justify-content-sm-center align-items-lg-center"
      style={{ padding: "2rem 1rem" }}
    >
      <div className="d-sm-flex" style={{ width: "55%" }}>
        <img
          className="d-sm-flex"
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
          {content.list.map((listItem) => {
            return (
              <li style={{ color: "var(--gray)" }}>
                {listItem.text}
                <br />
              </li>
            );
          })}
        </ul>
        {/* <button
              className="btn btn-primary"
              type="button"
              style={{
                padding: "0.8rem 1.6rem",
                borderRadius: "5px",
                background:
                  "linear-gradient(45deg, RGB(100, 100, 232), RGB(151, 120, 241)), #7c82fe",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontSize: " 15px",
                borderColor: "#888888",
                marginLeft: "1.2rem",
              }}
            >
              Learn More
            </button> */}
      </div>
    </div>
  );
};

export default MissionAndHistoryInnerComponent;
