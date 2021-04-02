import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [intersecting, setIntersecting] = useState("HOME");
  useEffect(() => {
    // setTimeout(() => {
    //   window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    //   };
    // }, 500);

    const sections = document.querySelectorAll(".section");
    // const links = document.querySelectorAll(".nav-link");
    console.log(sections);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // for (const link of links) {
          //   if (link.dataset.title === entry.target.dataset.title) {
          //     link.classList.add("active-link");
          //   } else {
          //     link.classList.add("not-active");
          //   }
          // }
          console.log(entry.target);
          setIntersecting(entry.target.dataset.title);
        }
        // });
      },
      {
        rootMargin: "-40% 0px 0px 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <>
      <Navbar inView={intersecting} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
