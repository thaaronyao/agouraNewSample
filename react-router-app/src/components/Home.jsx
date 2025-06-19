import React from 'react';
import LogoHome from '../assets/Images/banner-bg2.jpg';

function Home() {
  return (
    <>
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
