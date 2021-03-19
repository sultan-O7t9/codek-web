import React from "react";

const Container = (props) => {
  return (
    <div className={props.containerClasses} style={props.styles}>
      {props.children}
    </div>
  );
};

export default Container;
