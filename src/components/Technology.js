import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Platform = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="100px"
      data-aos-delay={props.animeDelay}
      className=" platform d-flex flex-column align-items-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
      style={{
        padding: "1.875rem",
        background: "rgba(0,0,0,0)",
        borderRadius: "50px",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "26px",
          background: props.background,
          marginBottom: "1.1875rem",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </div>
      <h1
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          color: "var(--gray)",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default Platform;
