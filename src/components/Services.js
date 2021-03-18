import React from "react";
import StartupBoxIcon01 from "../assets/img/aeroland-startup-box-icon-01.png";
import Column from "./Container/Column";
import Container from "./Container/Container";
import Row from "./Container/Row";
import Service from "./Service";

const Services = () => {
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
          <Container>
            <Row>
              <Column>
                <Service img={StartupBoxIcon01} />
              </Column>
              <Column>
                <Service img={StartupBoxIcon01} />
              </Column>
              <Column>
                <Service img={StartupBoxIcon01} />
              </Column>
              <Column>
                <Service img={StartupBoxIcon01} />
              </Column>
              <Column>
                <Service img={StartupBoxIcon01} />
              </Column>
              <Column>
                <Service img={StartupBoxIcon01} />
              </Column>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Services;
