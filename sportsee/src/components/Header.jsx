import React from "react";

import SideBar from "./SideBar";
import HorizontalHeader from "./SubComponents/HorizontalHeader";

/**
 * @description Header is the complete menu: the horizontal menu + the side bar menu
 * @returns the header with the horizontal and side bar menus
 */
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