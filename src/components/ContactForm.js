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

  useEffect(() => {
    AOS.init();
  }, []);

  const changeNameHandler = (e) => {
    const value = e.target.value;
    if (value.trim()) setFormData({ ...formData, name: value });
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
    if (value.trim()) setFormData({ ...formData, subject: value });
  };
  const changeMessageHandler = (e) => {
    const value = e.target.value;
    if (value.trim()) setFormData({ ...formData, message: value });
  };
  const submitFormHanler = (e) => {
    e.preventDefault();
    if (formData.name && formData.subject && formData.message) {
      if (!formData.email) alert("Invalid Email");
      else {
        console.log(formData);
      }
    } else {
      alert("Fill all the Fields");
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
        classes="form-control"
        type="text"
        styles={{
          minWidth: "47%",
          padding: "1.6rem",
          background: "RGB(248, 248, 248)",
          borderRadius: "5px",
          borderWidth: "0",
          width: "47%",
        }}
        placeholder="Name*"
        onchange={(e) => {
          changeNameHandler(e);
        }}
      />
      <FormInput
        classes="form-control"
        type="text"
        styles={{
          "min-width": "47%",
          padding: "1.6rem",
          background: "RGB(248, 248, 248)",
          "border-radius": "5px",
          "border-width": "0",
          width: "47%",
        }}
        placeholder="Email*"
        onchange={(e) => {
          changeEmailHandler(e);
        }}
      />
      <FormInput
        classes="form-control"
        type="text"
        styles={{
          "min-width": "98%",
          margin: "1.5rem 0",
          padding: "1.6rem",
          background: "RGB(248, 248, 248)",
          "border-radius": "5px",
          "border-width": "0",
        }}
        placeholder="Subject"
        onchange={(e) => {
          changeSubjectHandler(e);
        }}
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
        onChange={(e) => {
          changeMessageHandler(e);
        }}
      ></textarea>
      <button
        className="btn btn-primary form-btn"
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
  );
};

export default ContactForm;
