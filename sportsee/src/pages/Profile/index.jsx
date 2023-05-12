import React from "react";

import Header from "../../components/Header";
import Stats from "../../components/Stats";

import "./profile.css";

/**
 * @description Profile creates a personalised profile page for each users
 * @returns {JSX.Element} Custom Profil Page for each user
 */
export default function Profile ()
{
    return (
        <div className="profileContainer">
          <Header />
          <Stats />
        </div> 
    );
};