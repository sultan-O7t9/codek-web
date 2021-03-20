import React from "react";
import formImg from "../assets/img/aeroland-startup-image-02.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      className="d-flex flex-column align-items-lg-center"
      id="contact"
      style={{ background: "var(--white)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div style={{ width: "100%", padding: "0" }}>
              {/*  */}
              <div className="d-sm-flex flex-column align-items-sm-center align-items-lg-start">
                <h3
                  style={{ "font-size": "2.625rem", color: "RGB(44, 48, 120)" }}
                >
                  Be our parteners!
                </h3>
                <p
                  style={{
                    "font-size": "15px",
                    "font-weight": "bold",
                    color: "var(--gray)",
                  }}
                >
                  Together we can create anything!
                </p>
              </div>
              {/*  */}
              <ContactForm />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div style={{ width: "100%", padding: "0" }}>
              <img
                alt=""
                src={formImg}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
