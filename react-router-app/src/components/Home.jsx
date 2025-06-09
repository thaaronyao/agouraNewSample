import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import "../styles/Home.css"; // adjust path if needed
import LogoHome from "../assets/Images/banner-bg2.jpg";
function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="banner-container">
        <img src={LogoHome} alt="Home" className="banner-image" />
        <div className="banner-content">
          <h1>
            Free
            <br />
            Educational Program
          </h1>
          <a className="readon" href="mathcircle.html">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
