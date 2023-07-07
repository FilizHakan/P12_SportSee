import React from "react";
import { Link } from "react-router-dom";

import { USER_MAIN_DATA } from "../../utils/data";
import LogoSportSee from "../../assets/logo-sportsee.svg"; 
import IconSportSeeMan from "../../assets/icon-man.svg";

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
            {USER_MAIN_DATA.map((user) => (
              <div className="linkContainer" key={user.id}>
                <Link 
                  to={`/statistics/${user.id}`} 
                  className="profileBtn"
                >
                  {`${user.userInfos.firstName}`}
                </Link>
              </div>
            ))}
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
