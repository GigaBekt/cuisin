import React from "react";
import HeroCss from "./Hero.module.scss";

// Assets
import FullImg from "../../Assets/Img/fullimg.svg";

const HeroSection = () => {
  const Heading = "Plan The Perfect Event";
  const Heading4 =
    "Most comprehensive resource to help you plan your event. Find your Wedding, Party or Meeting venue now.";

  return (
    <div className="container">
      <div className={HeroCss.hero_full_img}>
        <div className={HeroCss.info_texts}>
          <h1>{Heading}</h1>
          <h4>{Heading4}</h4>
        </div>
        <img src={FullImg} alt="" />
      </div>
    </div>
  );
};
export default HeroSection;
