import React from "react";

const Container = (props) => {
  return (
    <div className="container" style={{ width: "auto" }}>
      {props.children}
    </div>
  );
};

export default Container;
