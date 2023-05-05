import React from "react";
import { Link } from "react-router-dom";

/**
 * @description Creation of the horizontal navbar containing all the links)
 * @returns (JSX.Element) the horizontal navbar
 * 
 */

export default function NavBar () 
{

  return (
    <div className="horizontalNavBar">

      <nav className="navBar">
        <Link className="homeButton navBarBtn" to="/SportSee/Home">Accueil</Link>
        <Link className="profileButton navBarBtn" to="#Profile">Profil</Link>
        <Link className="settingButton navBarBtn" to="#Setting">Réglage</Link>
        <Link className="communityButton navBarBtn" to="#Communauty">Communauté</Link>
      </nav>

    </div>

  );
};