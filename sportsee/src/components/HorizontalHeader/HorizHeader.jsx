import React from "react";

import NavBar from "../HorizontalHeader/NavBar";
import Logo from "../HorizontalHeader/Logo";

function HorizHeader()
{
  return (
    <div className="horizontalNavBarContainer">
      <Logo />
      <NavBar />
    </div>
  );
};

export default HorizHeader;