import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Sri Shiridi Sai Enterprises</h1>
        <p>
          Sri Shiridi Sai Enterprises, established in <strong>2010</strong>, was
          founded by <strong>G. Raju</strong> with a mission to build a
          dependable distribution network across South India.
        </p>
        <p>
          We have been a trusted distributor for leading brands like Baadshah
          and Dodla. With years of industry experience, our founder envisioned a
          company that delivers quality products on time and fosters long-term
          partnerships.
        </p>
        <p>
          Our focus remains on transparency, consistent service, and supporting
          retailer growth through a responsive and responsible supply chain.
        </p>

        <div className="founder-info">
          <img src="/daddy.jpeg" alt="Founder G. Raju" />
          <div>
            <h4>G. Raju</h4>
            <p>Founder</p>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img
          src="/logo.png"
          alt="Sri Shiridi Sai Enterprises team"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
