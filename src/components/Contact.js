import React from "react";
import formImg from "../assets/img/aeroland-startup-image-02.png";
import ContactForm from "./ContactForm";
import Column from "./Container/Column";
import Container from "./Container/Container";

const Contact = () => {
  return (
    <section
      className="d-flex flex-column align-items-lg-center"
      style={{ background: "var(--white)" }}
    >
      <div className="container">
        <Container containerClasses="row" styles={{}}>
          <Column columnClasses="col-md-6 col-lg-6">
            <div style={{ width: "100%", padding: "0" }}>
              {/*  */}
              <div className="d-sm-flex flex-column align-items-sm-center align-items-lg-start">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100px"
                  style={{ fontSize: "2.625rem", color: "RGB(44, 48, 120)" }}
                >
                  Be our parteners!
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100px"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "var(--gray)",
                  }}
                >
                  Together we can create anything!
                </p>
              </div>
              {/*  */}
              <ContactForm />
            </div>
          </Column>
          <Column columnClasses="col-md-6 col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="100px"
              style={{ width: "100%", padding: "0" }}
            >
              <img
                className="elementToAnimate"
                alt=""
                src={formImg}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Column>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
