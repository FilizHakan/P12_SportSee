import React from "react";

import NavBar from "./NavBar";
import Logo from "./Logo";

function HorizontalHeader()
{

  return (
    <div className="horizontalNavBarContainer">

      <Logo />
      <NavBar />
      
    </div>
  );
};

export default HorizontalHeader;