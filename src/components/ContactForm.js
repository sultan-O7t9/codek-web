import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import "../assets/css/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });
  const [inValidEmail, setInValidEmail] = useState(false);
  const [inValidInput, setInValidInput] = useState({
    name: false,
    subject: false,
    message: false,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const changeNameHandler = (e) => {
    const value = e.target.value;
    if (value.trim()) {
      setInValidInput({ ...inValidInput, name: false });
      setFormData({ ...formData, name: value });
    } else {
      setInValidInput({ ...inValidInput, name: true });
    }
  };
  const changeEmailHandler = (e) => {
    const value = e.target.value;
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.trim()) {
      if (value.match(mailFormat)) {
        setFormData({ ...formData, email: value });
      }
    }
  };
  const changeSubjectHandler = (e) => {
    const value = e.target.value;
    if (value.trim()) {
      setInValidInput({ ...inValidInput, subject: false });
      setFormData({ ...formData, subject: value });
    } else {
      setInValidInput({ ...inValidInput, subject: true });
    }
  };
  const changeMessageHandler = (e) => {
    const value = e.target.value;
    if (value.trim()) {
      setInValidInput({ ...inValidInput, message: false });
      setFormData({ ...formData, message: value });
    } else {
      setInValidInput({ ...inValidInput, message: true });
    }
  };
  const submitFormHanler = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.message ||
      !formData.subject ||
      !formData.email ||
      formData.name.length < 2 ||
      formData.message < 2 ||
      formData.subject < 2
    ) {
      setInValidInput({
        name: !formData.name,
        message: !formData.message,
        subject: !formData.subject,
      });
      if (
        !inValidInput.email ||
        !inValidInput.message ||
        !inValidInput.subject
      ) {
        if (!formData.email) {
          setInValidEmail(true);
          console.log("error");
        }
      } else {
        console.log(formData);
      }
    }
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
        tooltipTxt="Input is Empty"
        tooltip={inValidInput.name}
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
          changeNameHandler(e);
        }}
      />
      <FormInput
        pattern=" /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        tooltip={inValidEmail}
        tooltipTxt="Invalid Email"
        classes="form-control"
        type="text"
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
          changeEmailHandler(e);
        }}
      />
      <FormInput
        tooltipTxt="Input is Empty"
        tooltip={inValidInput.subject}
        classes="form-control"
        type="text"
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
          changeSubjectHandler(e);
        }}
      />
      <div style={{ position: "relative", width: "100%" }}>
        <textarea
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
            changeMessageHandler(e);
          }}
        ></textarea>
        <span
          className="tooltiptext"
          style={{ visibility: inValidInput.message ? "visible" : "hidden" }}
        >
          Input is Empty
        </span>
      </div>
      <button
        className="btn btn-primary form-btn"
        style={{
          padding: "1rem 1.6rem",
          borderRadius: "5px",
          fontWeight: "bold",
          letterSpacing: "1px",
          fontSize: "15px",
          borderColor: "#888888",
          margin: "1.5rem 0",
          marginLeft: "1.2rem",
        }}
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
