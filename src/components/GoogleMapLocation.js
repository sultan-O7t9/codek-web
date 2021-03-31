import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

const GoogleMapLocation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const isMobile = useMediaQuery({ maxWidth: "400px" });

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100px"
      data-aos-delay="100"
      style={{
        width: isMobile ? "100%" : "500px",
        margin: "0.8rem 0",
        padding: isMobile ? "0 0 1rem" : "1rem 2rem",
        height: "250px",
      }}
    >
      <iframe
        title="Location on map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.7524177853616!2d74.06327865446326!3d32.58612626178912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f05822238a8bd%3A0xa31d0db65ddb1e3d!2sCodek%20Technologies!5e0!3m2!1sen!2s!4v1617165574156!5m2!1sen!2s"
        style={{ width: "100%", height: "100%", border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapLocation;
