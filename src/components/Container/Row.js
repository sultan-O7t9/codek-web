import React from "react";
import Column from "./Column";

const Row = () => {
  return (
    <div className="row" style={{ width: "auto" }}>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default Row;
