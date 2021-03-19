import React from "react";
import Column from "./Container/Column";
import Container from "./Container/Container";
import Row from "./Container/Row";
import Platform from "./Platform";
import Spacer from "./Spacer";
import "../assets/css/styles.css";

const Platforms = () => {
  const platforms = [
    {
      title: "Windows OS",
      icon: "fab fa-microsoft",
      color: "#ff9800",
      background: "#ffe0b2",
    },
    {
      title: "Android OS",
      icon: "fab fa-android",
      color: "#4caf50",
      background: "#b7dfb9",
    },
    {
      title: "IOS",
      icon: "fab fa-apple",
      color: "#534ee8",
      background: "#f5f3fe",
    },
    {
      title: "React JS ",
      icon: "fab fa-react",
      color: "#4bb5ca",
      background: "#eaf9ff",
    },
    {
      title: "Node JS",
      icon: "fab fa-node",
      color: "#8bc34a",
      background: "#cde5b2",
    },
    {
      title: "React Native",
      icon: "fab fa-react",
      color: "#4bb5ca",
      background: "#eaf9ff",
    },
  ];
  return (
    <section
      className="d-flex flex-column align-items-center align-items-sm-center align-items-md-center align-items-lg-center"
      id="platforms"
      style={{ background: "var(--white)" }}
    >
      <h1
        className="d-flex"
        style={{
          "font-size": "2.625rem",
          "font-weight": "bold",
          "text-align": "center",
          color: "RGB(44, 48, 120)",
        }}
      >
        Present over 50 platfroms
      </h1>
      <p
        className="d-flex"
        style={{
          "font-size": "15px",
          color: "var(--gray)",
          "font-weight": "bold",
        }}
      >
        <br />
        We are present over a wide range of social media
        <br />
        <br />
      </p>
      <Spacer height="2vw" background="var(--white)" />
      <div style={{ width: "100%" }}>
        <Container
          containerClasses="container d-flex d-sm-flex justify-content-center justify-content-sm-center"
          styles={{ "min-height": "100px", width: "100%" }}
        >
          <Row rowClasses="row" styles={{ width: "100%", height: "100%" }}>
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
                  >
                    <i
                      class={platform.icon}
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
