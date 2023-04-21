import React from "react";

import SideBar from "./SideBar";
import HorizontalHeader from "./SubComponents/HorizontalHeader";


function Header()
{
    return (
        <div className="headerContainer">
            <HorizontalHeader />
            <SideBar />
        </div>
    )
}

export default Header;