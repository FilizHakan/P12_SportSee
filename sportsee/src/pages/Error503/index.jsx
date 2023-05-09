import React from "react";
import { Link } from "react-router-dom";

import IconSportSeeMan from "../../assets/icon-man.svg" 

import "./error503.css";

/**
 * @description Error404 is the creation of the 400 error page from the error sub-component
 * @returns {JSX.Element} 503 Error Page
 */
export default function error503 () 
{

  return (
    <main>

      <h1 className="errorTitleFive">503</h1>

      <div>
            <p className="errorContent">
                Oops! La page que vous demandez n'existe pas.
            </p>
            <div className="iconSportSee">
                <img 
                  src={IconSportSeeMan} 
                  className="homeIcon SSIcon" 
                  alt="SportSee Icon"
                >
                </img>
            </div>

            <Link 
              className="errorLink" 
              to={"http://localhost:3000/SportSee/Home"}
            >
                Retourner sur la page d'accueil
            </Link>
      </div>

    </main>
  );
};