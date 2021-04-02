import React from "react";
import { useMediaQuery } from "react-responsive";
import "../assets/css/styles.css";

const MissionAndHistoryInnerComponent = ({ content }) => {
  const isMobile = useMediaQuery({ maxWidth: "576px" });
  let list=null;
  if(content.list.length>0){
    list=(content.list.map((listItem, index) => {
      return (
        <li key={index} style={{ color: "var(--gray)" }}>
          {listItem.text}
          <br />
        </li>
      );
    }));
  }
  return (
    <div
      className=" fade-in d-flex d-sm-flex d-md-flex d-lg-flex flex-row align-items-start flex-wrap justify-content-sm-center align-items-lg-center"
      style={{ padding: "2rem 1rem", marginBottom: "3rem" }}
    >
      <div
        className="d-flex msn-img-container"
        style={{ width: isMobile ? "100vw" : "50%" }}
      >
        <img
          className="d-sm-flex elementToAnimate"
          src={content.imgSrc}
          alt=""
          style={{ width: isMobile?"100%":"80%" }}
        />
      </div>
      <div
        style={{
          width: isMobile ? "100vw" : "45%",
          marginTop: isMobile ? "1rem" : "1rem",
          textAlign: isMobile ? "center" : "initial",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}
      >
        <p
          style={{
            marginTop:isMobile?"1rem":"initial",
            maxWidth: "390px",
            marginLeft: isMobile ? "none" : "1.2rem",
            color: "var(--gray)",
            fontWeight:"bold"
          }}
        >

          {content.title}
          <br />
          <br />
        </p>
        <ul
          style={{
            marginBottom: "2.2rem",
            marginRight: isMobile ? "0" : "2.2rem",
          }}
        >
          {list}
        </ul>
      </div>
    </div>
  );
};

export default MissionAndHistoryInnerComponent;
