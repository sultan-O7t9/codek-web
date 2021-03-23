import React from "react";
import "../assets/css/styles.css";

const FormInput = ({
  type,
  styles,
  classes,
  placeholder,
  onchange,
  w,
  tooltip,
  tooltipTxt,
  pattern,
  name,
}) => {
  return (
    <div style={{ width: w.width, minWidth: w.minWidth, position: "relative" }}>
      <input
        required={true}
        name={name}
        className={classes}
        type={type}
        style={styles}
        placeholder={placeholder}
        defaultValue={null}
        onChange={onchange}
      />
      {/* <span
        className="tooltiptext"
        style={{ visibility: tooltip ? "visible" : "hidden" }}
      >
        {tooltipTxt}
      </span> */}
    </div>
  );
};

export default FormInput;
