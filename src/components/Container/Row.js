import React from "react";

const Row = (props) => {
  return (
    <div className="row" style={{ width: "auto" }}>
      {props.children}
    </div>
  );
};

export default Row;
