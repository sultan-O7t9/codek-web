import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "auto",
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
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            About us
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Before you go
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Online check in
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            FAQ
          </p>
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
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Terms of Payment
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Privacy Policy
          </p>
          <p
            style={{
              color: "RGB(188, 188, 214)",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Where to Find Us
          </p>
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
          © 2019 AeroLand. All Rights Reserved.
        </p>
        <div className="btn-group order-1" role="group">
          <button
            className="btn btn-primary"
            type="button"
            style={{
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              margin: "10px",
              background: "rgba(0,0,0,0)",
              borderColor: "var(--gray)",
            }}
          >
            <i class="fab fa-twitter"></i>
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              margin: "10px",
              background: "rgba(0,0,0,0)",
              borderColor: "var(--gray)",
            }}
          >
            <i class="fab fa-instagram"></i>
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              margin: "10px",
              background: "rgba(0,0,0,0)",
              borderColor: "var(--gray)",
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
