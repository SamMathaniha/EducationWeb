import React from "react";
import "./IntroSession.css";
import studentImage from "../../assets/images/StudentImage.png";

const IntroSession = () => {
  return (
    <div className="introbox">
      <div className="intro-content">
        <div className="text-section">
          <h1>Welcome to Sam Institute</h1>
          <h4>
            Join us for a transformative learning experience. Learn from the
            best in the industry.
          </h4>
          <div className="button-group">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="image-section">
          <img src={studentImage} alt="Intro Session" />
        </div>
      </div>
    </div>
  );
};

export default IntroSession;
