import React, { useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const fileInputRef = useRef(null);

  const handleResumeUpload = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Handle file upload logic here
    }
  };

  return (
    <div id="home" className="hero">
      <img src="/satya2.jpg" alt="" />
      <h1>
        <span>I'm Satya Prajapati,</span> MERN stack developer from Noida,
        INDIA.
      </h1>
      <p>
        MERN stack developer with 1.5+ years of experience in multiple companies
        like Systaldyn.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleResumeUpload}>
          My resume
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Hero;
