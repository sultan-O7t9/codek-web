import React from "react";

const FormInput = ({ type, styles, classes, placeholder, onchange }) => {
  return (
    <input
      className={classes}
      type={type}
      style={styles}
      placeholder={placeholder}
      defaultValue=""
      onChange={onchange}
      // onSelect={(e) => {
      //   if (!e.target.value.trim()) {
      //     e.target.style.background = "#fb8181";
      //   }
      // }}
    />
  );
};

export default FormInput;
