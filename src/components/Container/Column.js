import React from "react";

const Column = (props) => {
  return (
    <div className={props.columnClasses} style={props.styles}>
      {props.children}
    </div>
  );
};

export default Column;
