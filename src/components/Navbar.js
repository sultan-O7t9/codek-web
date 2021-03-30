import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({ inView }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [active, setActive] = useState("");

  const [navLinks, setNavLinks] = useState([
    {
      text: "HOME",
      href: "#home",
    },
    { text: "SERVICES", href: "#services" },
    { text: "TECHNOLOGIES", href: "#technologies" },
    { text: "CONTACT", href: "#contact" },
  ]);

  return (
    <nav
      className="navbar navbar-light navbar-expand-md sticky-top"
      style={{ background: "rgb(102,16,242)" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          id="nav-brand"
          href="#home"
          style={{
            fontSize: "2.5rem",
            color: "var(--white)",
            fontWeight: "bold",
          }}
        >
          CODEK
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
