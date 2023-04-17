import React from "react";
import { Link } from "react-router-dom";
import YogaIcon from "../assets/yoga-icon.svg";
import SwimmingIcon from "../assets/swimming-icon.svg";
import BikingIcon from "../assets/biking-icon.svg";
import WeightIcon from "../assets/weight-icon.svg";


function SideBar() 
{
  return (
    <div className="verticalSideBar">
      <div className="iconsContainer">
        <nav className="navIcon">
          <Link to="#yogaStats">
            <img src={YogaIcon} className="iconBtn" alt="Yoga Button" style={{ width: 64 }}
            />
          </Link>

          <Link to="#swimmingStats">
            <img src={SwimmingIcon} className="iconBtn" alt="Swimming Button" style={{ width: 64 }}
            />
          </Link>

          <Link to="#bikingStats">
            <img src={BikingIcon} className="iconBtn" alt="Biking Button" style={{ width: 64 }}
            />
          </Link>

          <Link to="#weightStats">
            <img src={WeightIcon} className="iconBtn" alt="Weight Button" style={{ width: 64 }}
            />
          </Link>
        </nav>
      </div>

      <p className="copyright">Copyright, SportSee 2023</p>
    </div>
  );
};

export default SideBar;
