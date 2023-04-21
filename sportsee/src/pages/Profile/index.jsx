import React from "react";

import Header from "../../components/Header";
import Macros from "../../components/Macros";

import "./profile.css";


export default function Profile ()
{
    return (
        <div className="profileContainer">
            <Header />
            <Macros />
        </div> 
    );
};