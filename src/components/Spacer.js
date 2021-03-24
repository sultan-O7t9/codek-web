import React from "react";

const Spacer = ({ id, height, background, classes }) => {
  const cls = classes || "";
  return (
    <div
      id={id}
      className={`spacer ${cls}`}
      style={{
        width: "100vw",
        height: height,
        background: background,
      }}
    ></div>
  );
};

export default Spacer;
