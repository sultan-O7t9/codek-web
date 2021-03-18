import React from "react";
import Service from "../Service";

const Column = () => {
  return (
    <div
      className="col-md-4 d-md-flex justify-content-md-center align-items-md-center"
      style={{ padding: "1rem" }}
    >
      <Service />
    </div>
  );
};

export default Column;
