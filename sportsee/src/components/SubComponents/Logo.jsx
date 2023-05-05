import React from "react";
import { Link } from "react-router-dom";

import LogoSportSee from "../../assets/logo-sportsee.svg";

/**
 * @description Creation of the logo container
 * @returns (JSX.Element) logo
 */

export default function Logo() 
{

  return (
    <div className="logoContainer">

      <Link to="http://localhost:3000/SportSee/Home">
        <img src={LogoSportSee} className="sportSeeLogo" alt="SportSee Logo">
        </img>
      </Link>

    </div>
  );
};