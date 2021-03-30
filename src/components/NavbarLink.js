import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ text, href, children, isActive, classes }) => {
  return (
    <a
      data-title={text}
      className={`nav-link ${classes}`}
      href={href}
      style={{
        color: "var(--white)",
        fontWeight: "bold",
        marginLeft: "1rem",
      }}
    >
      <span className="border"></span>
      {text}
      {children}
    </a>
  );
};

export default NavbarLink;
