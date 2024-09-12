import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
// import project6_img from "/assets/project_6.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {/* {mywork_data.map((work, index) => {
          return <img key={index} className="img" src={work.w_img} alt="" />;
        })} */}
        <img src="/Tomato.png" alt="" />
        <img src="/Portfolio.png" alt="" />
        <img src="/real state.png" alt="" />
        <img src="/shopping app.png" alt="" />
        <img src="" alt="" />
        <img src="/shop.png" alt="" />
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
