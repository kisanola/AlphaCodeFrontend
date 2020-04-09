import React from "react";
import backgroundImage from "../../assets/images/background.png";
import githubImage from "../../assets/icons/github.png";
import "./index.scss";

const TopLandingSection = () => {
  return (
    <div className="top-landing-section">
      <img
        src={backgroundImage}
        alt="background"
        className="h-screen w-full object-cover"
      />
      <div className="top-landing-section__container absolute w-full top-0 p-5 xl:pr-10 xl:pl-10 xl:pt-10 flex flex-col xl:flex-row">
        <div className="right w-full xl:w-1/2">
          <div className="top-landing-section__container--title text-white font-bold text-lg">
            AlphaCode
          </div>

          <div className="top-landing-section__container--slogan h-2 text-white font-bold">
            Code today like never before, solve challenging problems
          </div>

          <div className="top-landing-section__container--description text-white text-base ">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </div>

          <button className="text-black font-bold bg-white px-10 py-3 rounded-full outline-none flex items-center">
              <img src={githubImage} width={30} height={30} alt="github"/>
              <span className="pl-5 ">LOGIN WITH GITHUB</span>
          </button>
        </div>

        <div className="left w-1/2"></div>
      </div>
    </div>
  );
};

export default TopLandingSection;
