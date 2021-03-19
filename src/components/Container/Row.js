import React from "react";

const Row = (props) => {
  return (
    <div className={props.rowClasses} style={props.styles}>
      {props.children}
    </div>
  );
};

export default Row;
