import React from "react";
import { Link } from "react-router-dom";

import LogoSportSee from "../../assets/logo-sportsee.svg" 
import IconSportSeeMan from "../../assets/icon-man.svg" 
import "./home.css";

/**
 * @description Home is the creation of the main home page
 * @returns {JSX.Element} Home page
 */
export default function Home () 
{
    return (
    <div className="home">

      <div className="homeLogo">
        <Link to="/SportSee/Home">
          <img 
            src={LogoSportSee} 
            className="homeIconLogo" 
            alt="SportSee Icon"
          >
          </img>
        </Link>
        
        <div className="profileLink">
          <nav className="profileLinkNav">
            <Link 
              to="/statistics/12" 
              className="profile12Btn profileBtn"
            >
              KARL
            </Link>
            <Link 
              to="/statistics/18" 
              className="profile18Btn profileBtn"
            >
              CÉCILIA
            </Link>
          </nav>
        </div>
      </div>

      <div>
        <div className="homeTitleContainer">
          <h1 className="homeTitle">SportSee Dashboard</h1>
        </div>
        <p className="homeSubtitle">To view performance, click on any user profile</p>
        <div className="iconSportSee">
          <img 
            src={IconSportSeeMan} 
            className="homeIcon" 
            alt="SportSee Icon"
          >
          </img>
        </div>
      </div>

    </div>
  );
};
