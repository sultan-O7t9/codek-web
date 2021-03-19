import React from "react";

const Spacer = (props) => {
  return (
    <div
      style={{
        width: "100vw",
        height: props.height,
        background: props.background,
      }}
    ></div>
  );
};

export default Spacer;
