import React from "react";

import SideBar from "./SideBar";
import HorizHeader from "./HorizontalHeader/HorizHeader";


function Header()
{
    return (
        <div className="headerContainer">
            <HorizHeader />
            <SideBar />
        </div>
    )
}

export default Header;