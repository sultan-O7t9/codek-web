import React, { useEffect } from "react";
import Column from "./Container/Column";
import webServices from "../assets/img/icons/code.svg";
import mobileAppServices from "../assets/img/icons/app-development.svg";
import cyberSecurityServices from "../assets/img/icons/cyber-security.svg";
import Container from "./Container/Container";
import Row from "./Container/Row";
import Service from "./Service";

import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const services = [
    {
      title: "Mobile App Development",
      desc:
        "Our team builds nimble and elegant apps for all smartphone platforms that provide an intuitive end user experience.",
      img: mobileAppServices,
      animeDelay: "200",
    },
    {
      title: "Web Development",
      desc:
        "Our web development team creates intuitive user experiences wrapped up in beautiful designs and precisely made to your specification.",
      img: webServices,
      animeDelay: "100",
    },
    {
      title: "Cyber Security",
      desc:
        "Building a secure app is critical to maintaining trust, safeguarding your revenue and protecting your brand.",
      img: cyberSecurityServices,
      animeDelay: "300",
    },
  ];
  return (
    <section
      data-title="SERVICES"
      className="section d-flex d-md-flex flex-column align-items-center"
      style={{ background: "white" }}
    >
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
        className="text-center"
        style={{
          fontSize: "2.625rem",
          maxWidth: "700px",
          fontWeight: "bold",
          color: "RGB(44, 48, 120)",
        }}
      >
        <br />
        We’ve created enticing softwares for startups and businesses
        <br />
        <br />
      </h3>
      <div style={{ width: "100%" }}>
        <Container containerClasses="container" styles={{ width: "auto" }}>
          <Row rowClasses="row" styles={{ width: "auto" }}>
            {services.map((service, index) => {
              return (
                <Column
                  key={index}
                  columnClasses="col-md-4 d-md-flex justify-content-md-center align-items-md-center"
                  styles={{ padding: "1rem" }}
                >
                  <Service
                    animeDelay={service.animeDelay}
                    img={service.img}
                    serviceTitle={service.title}
                    serviceDescription={service.desc}
                  />
                </Column>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Services;
