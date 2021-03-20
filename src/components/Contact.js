import React from "react";
import formImg from "../assets/img/aeroland-startup-image-02.png";

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
              <form className="d-flex justify-content-between flex-wrap">
                <input
                  className="form-control"
                  type="text"
                  style={{
                    "min-width": "47%",
                    padding: "1.6rem",
                    background: "RGB(248, 248, 248)",
                    "border-radius": "5px",
                    "border-width": "0",
                    width: "47%",
                  }}
                  placeholder="Name*"
                />
                <input
                  className="form-control"
                  type="text"
                  style={{
                    "min-width": "47%",
                    padding: "1.6rem",
                    background: "RGB(248, 248, 248)",
                    "border-radius": "5px",
                    "border-width": "0",
                    width: "47%",
                  }}
                  placeholder="Email*"
                />
                <input
                  className="form-control"
                  type="text"
                  style={{
                    "min-width": "98%",
                    margin: "1.5rem 0",
                    padding: "1.6rem",
                    background: "RGB(248, 248, 248)",
                    "border-radius": "5px",
                    "border-width": "0",
                  }}
                  placeholder="Subject"
                />
                <textarea
                  className="form-control"
                  style={{
                    "min-height": "160px",
                    padding: "1.6rem",
                    background: "RGB(248, 248, 248)",
                    "border-radius": "5px",
                    "border-width": "0",
                  }}
                  placeholder="Message"
                ></textarea>
                <button
                  className="btn btn-primary"
                  style={{
                    padding: "1rem 1.6rem",
                    "border-radius": "5px",
                    background:
                      "linear-gradient(45deg, RGB(100, 100, 232), RGB(151, 120, 241)), #7c82fe",
                    "font-weight": "bold",
                    "letter-spacing": "1px",
                    "font-size": "15px",
                    "border-color": "#888888",
                    margin: "1.5rem 0",
                    "margin-left": "1.2rem",
                  }}
                >
                  Send message
                </button>
              </form>
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
