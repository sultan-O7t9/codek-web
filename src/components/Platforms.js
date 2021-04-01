import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Column from "./Container/Column";
import Container from "./Container/Container";
import Row from "./Container/Row";
import Platform from "./Technology";
import Spacer from "./Spacer";
import "../assets/css/styles.css";

const Platforms = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const platforms = [
    {
      title: "Wordpress",
      icon: "fab fa-wordpress",
      color: "#21759a",
      background: "#d2e3ea",
      animeDelay: "0",
    },
    {
      title: "Android OS",
      icon: "fab fa-android",
      color: "#4caf50",
      background: "#b7dfb9",
      animeDelay: "100",
    },
    {
      title: "IOS",
      icon: "fab fa-apple",
      color: "#534ee8",
      background: "#f5f3fe",
      animeDelay: "200",
    },
    {
      title: "React JS ",
      icon: "fab fa-react",
      color: "#4bb5ca",
      background: "#eaf9ff",
      animeDelay: "300",
    },
    {
      title: "Node JS",
      icon: "fab fa-node",
      color: "#8bc34a",
      background: "#cde5b2",
      animeDelay: "400",
    },
    {
      title: "React Native",
      icon: "fab fa-react",
      color: "#4bb5ca",
      background: "#eaf9ff",
      animeDelay: "500",
    },
  ];
  return (
    <section
      data-title="TECHNOLOGIES"
      className="section d-flex flex-column align-items-center align-items-sm-center align-items-md-center align-items-lg-center"
      style={{
        background: "var(--white)",
        paddingBottom: "2rem",
        marginTop: "1rem",
      }}
    >
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
        className="d-flex"
        style={{
          fontSize: "2.625rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "RGB(44, 48, 120)",
        }}
      >
        Technologies we use...
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100px"
        className="d-flex"
        style={{
          fontSize: "15px",
          color: "var(--gray)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <br />
        We use a wide range of latest Technologies to develop your software
        <br />
        <br />
      </p>
      <Spacer height="2vw" background="var(--white)" />
      <div style={{ width: "100%" }}>
        <Container
          containerClasses="container d-flex d-sm-flex justify-content-center justify-content-sm-center"
          styles={{ minHeight: "100px", width: "100%" }}
        >
          <Row
            rowClasses="row"
            styles={{ OverflowX: "hidden", width: "100%", height: "100%" }}
          >
            {platforms.map((platform, index) => {
              return (
                <Column
                  key={index}
                  columnClasses="col-md-4 col-lg-2 d-md-flex d-lg-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
                  styles={{}}
                >
                  <Platform
                    title={platform.title}
                    background={platform.background}
                    animeDelay={platform.animeDelay}
                  >
                    <i
                      className={platform.icon}
                      style={{ color: platform.color }}
                    ></i>
                  </Platform>
                </Column>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Platforms;
