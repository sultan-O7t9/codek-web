import React from "react";
import { useMediaQuery } from "react-responsive";
import formImg from "../assets/img/aeroland-startup-image-02.png";
import ContactForm from "./ContactForm";
import Column from "./Container/Column";
import Container from "./Container/Container";

const Contact = () => {
  const is1150 = useMediaQuery({ minWidth: "1150px" });
  const isIPADpro = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceHeight: "1300px",
  });
  const isIPAD = useMediaQuery({ maxWidth: "768px" });
  const is576 = useMediaQuery({ maxWidth: "576px" });
  const isMobile = useMediaQuery({ maxWidth: "400px" });

  return (
    <section
      className="d-flex flex-column align-items-lg-center"
      style={{
        background: "var(--white)",
        textAlign: isMobile ? "center" : "initial",
        padding: "3vw",
      }}
    >
      <Container containerClasses="row" styles={{}}>
        <Column columnClasses="col-md-6 col-lg-6">
          <div style={{ width: "100%", padding: "0" }}>
            {/*  */}
            <div className=" flex-column  align-items-lg-start">
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="100px"
                style={{
                  fontSize: "2.625rem",
                  color: "RGB(44, 48, 120)",
                  textAlign: isIPAD ? "center" : "initial",
                }}
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
                  textAlign: isIPAD ? "center" : "initial",
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
    </section>
  );
};

export default Contact;
