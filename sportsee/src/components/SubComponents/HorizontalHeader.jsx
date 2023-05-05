import React from "react";

import NavBar from "./NavBar";
import Logo from "./Logo";

/**
 * @description Calling the Logo and NavBar sub-components for the horizontal header
 * @returns Returns the Logo/NavBar sub-components of the horizontal header
 */

export default function HorizontalHeader()
{

  return (
    <div className="horizontalNavBarContainer">

      <Logo />
      <NavBar />

    </div>
  );
};