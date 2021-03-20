import React from "react";
import "../assets/css/styles.css";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0",
        zIndex: "-1",
        width: "100%",
        maxHeight: "65vh",
        background: "RGB(36, 38, 89)",
        borderTop: "3px solid RGB(88, 89, 181)",
      }}
    >
      <div
        className="d-flex flex-row"
        style={{
          paddingTop: "4.2rem",
          paddingRight: "2.75rem",
          paddingLeft: "2.75rem",
          paddingBottom: "1.0625rem",
        }}
      >
        <div style={{ padding: "1rem 2rem", width: "auto" }}>
          <h1 style={{ color: "var(--white)", fontSize: "2.625rem" }}>CODEK</h1>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Street 11 ABC, XYZ
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Street 11 ABC, XYZ
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Street 11 ABC, XYZ
          </p>
        </div>
        <div
          style={{ width: " auto", margin: "0.8rem 0", padding: "1rem 2rem" }}
        >
          <h2
            style={{
              color: "var(--white)",
              fontSize: "1.125rem",
              padding: "0",
              marginBottom: "10px",
              paddingBottom: "13px",
            }}
          >
            Who we are
          </h2>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            About us
          </a>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            Before you go
          </a>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            Online check in
          </a>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            FAQ
          </a>
        </div>
        <div
          style={{ width: "auto", margin: "0.8rem 0", padding: "1rem 2rem" }}
        >
          <h2
            style={{
              color: "var(--white)",
              fontSize: "1.125rem",
              padding: "0",
              marginBottom: "10px",
              paddingBottom: "13px",
            }}
          >
            Quick links
          </h2>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            Terms of Payment
          </a>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            Privacy Policy
          </a>
          <a
            className="footer-nav-links"
            href="index.html"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontSize: "15px",
            }}
          >
            Where to Find Us
          </a>
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-lg-center"
        style={{
          borderTop: "1px solid var(--gray)",
          padding: "1rem 2.75rem",
          height: "auto",
        }}
      >
        <p
          style={{
            color: "RGB(188, 188, 214)",
            fontWeight: "normal",
            margin: "0",
            textAlign: "center",
          }}
        >
          © 2021 CODEK. All Rights Reserved.
        </p>
        <div className="btn-group order-1" role="group">
          <a
            href="index.html"
            className="btn btn-primary footer-icon-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              margin: "10px",
              borderColor: "var(--gray)",
            }}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="index.html"
            className="btn btn-primary footer-icon-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              margin: "10px",
              borderColor: "var(--gray)",
            }}
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="index.html"
            className="btn btn-primary footer-icon-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              margin: "10px",
              borderColor: "var(--gray)",
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
