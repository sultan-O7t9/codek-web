import React from "react";

const NavbarLink = ({ text, href, children }) => {
  return (
    <a
      className="nav-link active"
      href={href}
      style={{
        color: "var(--white)",
        fontWeight: "bold",
        marginLeft: "1rem",
      }}
    >
      {text}
      {children}
    </a>
  );
};

export default NavbarLink;
