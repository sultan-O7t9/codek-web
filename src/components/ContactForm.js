import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import "../assets/css/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

const ContactForm = () => {
  const is1150 = useMediaQuery({ minWidth: "1150px" });
  const isIPADpro = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceHeight: "1300px",
  });
  const isIPAD = useMediaQuery({ maxWidth: "768px" });
  const is576 = useMediaQuery({ maxWidth: "576px" });
  const isMobile = useMediaQuery({ maxWidth: "400px" });

  const [formData, setFormData] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });
  const [inValidInput, setInValidInput] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  // const [inValidEmail, setInValidEmail] = useState(false);
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value.trim) {
      setInValidInput({ ...inValidInput, [name]: !value });
      setFormData({ ...formData, [name]: value });
    } else {
      setInValidInput({ ...inValidInput, [name]: !value });
    }
  };
  const handleUserEmail = (e) => {
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const name = e.target.name;
    const value = e.target.value;
    if (value.trim) {
      setInValidInput({ ...inValidInput, [name]: !value });
      if (value.match(mailFormat)) {
        // setInValidEmail(false);
        setFormData({ ...formData, [name]: value });
      } else {
        // setInValidEmail(true);
      }
    } else {
      setInValidInput({ ...inValidInput, [name]: !value });
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  //

  const handleSubmit = (event) => {
    const templateId = "template_w2cmb1h";

    sendFeedback(templateId, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_08uduoo", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  //

  const submitFormHanler = (e) => {
    e.preventDefault();
    if (formData.email && formData.name && formData.subject && formData.message)
      handleSubmit(e);
    else console.error("Tu mera putr chutti kr");
  };

  return (
    <form
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="100px"
      className="d-flex justify-content-between flex-wrap"
      onSubmit={(e) => {
        submitFormHanler(e);
      }}
    >
      <FormInput
        // tooltipTxt="Input is Empty"
        // tooltip={inValidInput.name}
        name="name"
        // val={formData.name}
        classes="form-control"
        type="text"
        w={{ width: "47%", minWidth: "47%" }}
        styles={{
          padding: "1.6rem",
          background: "RGB(248, 248, 248)",
          borderRadius: "5px",
          borderWidth: "0",
        }}
        placeholder="Name"
        onchange={(e) => {
          handleUserInput(e);
        }}
      />
      <FormInput
        // pattern={VALID_EMAIL}
        // tooltip={inValidInput.email || inValidEmail}
        // tooltipTxt={inValidInput.email ? "Input is Empty" : "Invalid Email"}
        // val={""}
        name="email"
        classes="form-control"
        type="email"
        w={{ width: "47%", minWidth: "47%" }}
        styles={{
          padding: "1.6rem",
          background: "RGB(248, 248, 248)",
          borderRadius: "5px",
          borderWidth: "0",
          width: "100%",
        }}
        placeholder="Email"
        onchange={(e) => {
          handleUserEmail(e);
        }}
      />
      <FormInput
        // tooltipTxt="Input is Empty"
        // tooltip={inValidInput.subject}
        classes="form-control"
        // val={formData.subject}
        type="text"
        name="subject"
        w={{ width: "100%", minWidth: "100%" }}
        styles={{
          width: "100%",
          margin: "1.5rem 0",
          padding: "1.6rem",
          background: "RGB(248, 248, 248)",
          borderRadius: "5px",
          borderWidth: "0",
        }}
        placeholder="Subject"
        onchange={(e) => {
          handleUserInput(e);
        }}
      />
      <div style={{ position: "relative", width: "100%" }}>
        <textarea
          // value={formData.message}
          required={true}
          name="message"
          className="form-control"
          style={{
            minHeight: "160px",
            padding: "1.6rem",
            background: "RGB(248, 248, 248)",
            borderRadius: "5px",
            borderWidth: "0",
            width: "100%",
          }}
          placeholder="Message"
          onChange={(e) => {
            handleUserInput(e);
          }}
        ></textarea>
        {/* <span
          className="tooltiptext"
          style={{ visibility: inValidInput.message ? "visible" : "hidden" }}
        >
          Input is Empty
        </span> */}
      </div>
      <button
        className="btn btn-primary form-btn"
        style={{
          width: isIPAD ? "100%" : "auto",
          padding: "1rem 1.6rem",
          borderRadius: "5px",
          fontWeight: "bold",
          letterSpacing: "1px",
          fontSize: "15px",
          borderColor: "#888888",
          margin: "1.5rem 0",
          // marginLeft: "1.2rem",
        }}
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
