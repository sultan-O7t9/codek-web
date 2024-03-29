import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
// import BrandLogo from "../assets/img/icons/codek-logo-1-white.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({ inView }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [active, setActive] = useState("");

  const navLinks = [
    {
      text: "HOME",
      href: "#home",
    },
    { text: "SERVICES", href: "#services" },
    { text: "TECHNOLOGIES", href: "#technologies" },
    { text: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className="navbar navbar-light navbar-expand-md sticky-top"
      style={{ background: "rgb(102,16,242)",top:"0",paddingTop:"0",paddingBottom:"0" }}
    >
      <div className="container-fluid" style={{display:"flex",alignItems:"center", position:"sticky",top:"0"}}>
        <a
          className="navbar-brand"
          id="nav-brand"
          href="#home"
          style={{
            fontSize: "2rem",
            color: "var(--white)",
            fontWeight: "bold",
            // height: "80px",
          }}
        >
          CODEK
          {/* <img
            src={BrandLogo}
            alt="CODEK"
            style={{ height: "auto", width: "100px" }}
          /> */}
          {/* <BrandLogo /> */}
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
          style={{ borderStyle: "none" }}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-md-flex justify-content-md-end align-items-md-center"
          id="navcol-1"
        >
          <ul
            className="navbar-nav d-md-flex align-items-md-center"
            style={{ margin: "0" }}
          >
            {/*  */}
            {navLinks.map((navLink, index) => {
              return (
                <li
                  key={index}
                  className="nav-item"
                  onClick={() => {
                    setActive(navLink.text);
                  }}
                >
                  <NavbarLink
                    classes={
                      // active == navLink.text &&
                      inView === navLink.text ? "active-link" : "not-active"
                    }
                    isActive={active}
                    text={navLink.text}
                    href={navLink.href}
                  />
                </li>
              );
            })}
            {/*  */}
            <li className="nav-item">
              <a
                href="#contact"
                style={{
                  color: "var(--white)",
                  fontWeight: "bold",
                  marginLeft: "1rem",
                }}
              >
                <button
                  className="btn btn-primary nav-cta"
                  type="button"
                  style={{
                    fontWeight: "bold",
                    padding: "10px 30px",
                    borderRadius: "5px",
                  }}
                >
                  HIRE US
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
