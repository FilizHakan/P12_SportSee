import React from "react";

import Header from "../../components/Header";
import Macros from "../../components/Macros";

import "./profile.css";

/**
 * @description Profile is the creation of a profile page for each users
 * @returns the custom profil page for each user
 */
export default function Profile ()
{
    return (
        <div className="profileContainer">
            <Header />
            <Macros />
        </div> 
    );
};