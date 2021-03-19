import React from "react";
import StartupBoxIcon01 from "../assets/img/aeroland-startup-box-icon-01.png";
import Column from "./Container/Column";
import Container from "./Container/Container";
import Row from "./Container/Row";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
    },
    {
      title: "Web Development",
      desc:
        "Our technical experts have a flair for developing clean-coded &amp;seamless websites based on customers’ needs",
      img: StartupBoxIcon01,
    },
  ];
  return (
    <div>
      <section
        className="d-flex d-md-flex flex-column align-items-center"
        id="services"
        style={{ background: "var(--white);" }}
      >
        <h3
          className="text-center"
          style={{
            "font-size": "2.625rem",
            "max-width": "700px",
            "font-weight": "bold",
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
    </div>
  );
};

export default Services;
