import React from "react";

const Platform = (props) => {
  return (
    <div
      className="d-flex flex-column align-items-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
      style={{ padding: "1.875rem", background: "rgba(0,0,0,0)" }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          "border-radius": "26px",
          background: props.background,
          "margin-bottom": "1.1875rem",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        {props.children}
      </div>
      <h1
        style={{
          "font-size": "15px",
          "font-weight": "bold",
          color: "var(--gray)",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default Platform;
