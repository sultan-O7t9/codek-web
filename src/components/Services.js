import React, { useEffect } from "react";
import StartupBoxIcon01 from "../assets/img/aeroland-startup-box-icon-01.png";
import Column from "./Container/Column";
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
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
      animeDelay: "100",
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
      animeDelay: "200",
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
      animeDelay: "300",
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
      animeDelay: "400",
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
      animeDelay: "500",
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
      animeDelay: "600",
    },
  ];
  return (
    <section
      className="d-flex d-md-flex flex-column align-items-center"
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
        We’ve created enticing designs for startups and new businesses
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
