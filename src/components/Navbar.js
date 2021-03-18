import React from "react";

const Navbar = () => {
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
            "font-size": "2.5rem",
            color: "var(--white)",
            "font-weight": "bold",
          }}
        >
          CODEK
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
          style={{ "border-style": "none" }}
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
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#home"
                style={{
                  color: "var(--white)",
                  "font-weight": "bold",
                  "margin-left": "1rem",
                }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#services"
                style={{
                  color: "var(--white)",
                  "font-weight": "bold",
                  "margin-left": "1rem",
                }}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#platforms"
                style={{
                  color: "var(--white)",
                  "font-weight": "bold",
                  "margin-left": "1rem",
                }}
              >
                PLATFORMS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#contact"
                style={{
                  color: "var(--white)",
                  "font-weight": "bold",
                  "margin-left": "1rem",
                }}
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#contact"
                style={{
                  color: "var(--white)",
                  "font-weight": "bold",
                  "margin-left": "1rem",
                }}
              >
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{
                    border: "3px solid var(--indigo)",
                    background: "var(--white)",
                    color: "var(--indigo)",
                    "font-weight": "bold",
                    padding: "10px 30px",
                    "border-radius": "5px",
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
