import React from "react";
import { Link } from "react-router-dom";

import IconSportSeeMan from "../assets/icon-man.svg" 

/**
 * @description Creation of the error page (400)
 * @returns the error page with a link to the homepage 
 */
function Error ({ code }) 
{
  return (
    <div className="errorContainer">
      <h1 className="errorTitle">404</h1>
      {code === "ERR_NETWORK" ? (
        <div>
            <p className="errorContent">
                SportSee est actuellement en maintenance.
            </p>
            <div className="iconSportSee">
                <img src={IconSportSeeMan} className="homeIcon SSIcon" alt="SportSee Icon">
                </img>
            </div>
            <Link className="errorLink" to={"http://localhost:3000/SportSee/Home"}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    
      ) : (
        
        <div>
            <p className="errorContent">
                Oops! La page que vous demandez n'existe pas.
            </p>
            <div className="iconSportSee">
                <img src={IconSportSeeMan} className="homeIcon SSIcon" alt="SportSee Icon">
                </img>
            </div>
            <Link className="errorLink" to={"http://localhost:3000/SportSee/Home"}>
                Retourner sur la page d'accueil
            </Link>
        </div>
      )}
    </div>
  );
};

export default Error;