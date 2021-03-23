import React from "react";

const Spacer = ({ id, height, background }) => {
  return (
    <div
      id={id}
      className="spacer"
      style={{
        width: "100vw",
        height: height,
        background: background,
      }}
    ></div>
  );
};

export default Spacer;
