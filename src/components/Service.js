import React from "react";

const Service = (props) => {
  const { img, serviceTitle, serviceDescription } = props;
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        width: "98",
        "min-height": "100px",
        padding: "1rem",
      }}
    >
      <img src={img} alt="startupboxicon" />
      <h4
        className="text-center"
        style={{
          "font-size": "1.125rem",
          margin: "14px",
          "font-weight": "bold",
          "margin-bottom": "0",
          color: "RGB(113, 116, 152)",
        }}
      >
        {serviceTitle}
      </h4>
      <p
        className="text-center"
        style={{
          "font-size": "15px",
          "font-weight": "normal",
          "max-width": "220px",
          color: "var(--gray)",
        }}
      >
        <br />
        {serviceDescription}
        <br />
        <br />
      </p>
    </div>
  );
};

export default Service;
