import React, { useEffect } from "react";
import "../assets/css/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Service = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { img, serviceTitle, serviceDescription, animeDelay } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="100px"
      data-aos-delay={animeDelay}
      className="d-flex flex-column align-items-center service"
      style={{
        width: "98",
        minHeight: "100px",
        padding: "1rem",
        borderRadius: "50px",
      }}
    >
      <img
        src={img}
        style={{ width: "64px", height: "64px" }}
        alt="startupboxicon"
      />
      <h4
        className="text-center"
        style={{
          fontSize: "1.125rem",
          margin: "14px",
          fontWeight: "bold",
          marginBottom: "0",
          color: "RGB(113, 116, 152)",
        }}
      >
        {serviceTitle}
      </h4>
      <p
        className="text-center"
        style={{
          fontSize: "15px",
          fontWeight: "normal",
          maxWidth: "220px",
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
