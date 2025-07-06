import React from "react";
import HomeFront from "../../components/HomeFront";
import RetailBlock from "../../components/RetailBlock";
import {
  frontBaadshahImages,
  frontDodlaImages,
  starZingImages,
  ullasImages,
  xinngImages,
} from "../../constants/constants";
import "./HomePage.css";

const HomePage = () => {
  document.title = "Sri Shiridi Sai Enterprises";
  return (
    <div className="home-page">
      <HomeFront />

      <section className="retailer-section">
        <h2>Our Trusted Retailers</h2>
        <div className="retailer-block">
          <div className="retailer-logo-line">
            <div className="line"></div>
            <img src="/baadlogo.jpg" alt="Baadshah Logo" className="logo-img" />
            <div className="line"></div>
          </div>
          <RetailBlock list={frontBaadshahImages} />
        </div>
        <div className="retailer-block">
          <div className="retailer-logo-line">
            <div className="line"></div>
            <img
              src="/dodlalogo.png"
              alt="Baadshah Logo"
              className="logo-img"
            />
            <div className="line"></div>
          </div>
          <RetailBlock list={frontDodlaImages} />
        </div>
        <div className="retailer-block">
          <div className="retailer-logo-line">
            <div className="line"></div>
            <img
              src="/ullaslogo.jpg"
              alt="Baadshah Logo"
              className="logo-img"
            />
            <div className="line"></div>
          </div>
          <RetailBlock list={ullasImages} />
        </div>
        <div className="retailer-block">
          <div className="retailer-logo-line">
            <div className="line"></div>
            <img
              src="/xinnglogo.png"
              alt="Baadshah Logo"
              className="logo-img"
            />
            <div className="line"></div>
          </div>
          <RetailBlock list={xinngImages} />
        </div>
        <div className="retailer-block">
          <div className="retailer-logo-line">
            <div className="line"></div>
            <img
              src="/staringlogo.webp"
              alt="Baadshah Logo"
              className="logo-img"
            />
            <div className="line"></div>
          </div>
          <RetailBlock list={starZingImages} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
