import React from "react";
import PropTypes from "prop-types";
import "./userName.css";
/**
 * @description Fetch the mocked user data to transform them into the name components
 * @param {string} userName (user Name)
 * @returns the user's hello message with his/her first name 
 */
export default function UserName ({ userName })
{    
    //console.log(userName)
    return (
        <div className="nameTitle">
            <h1 className="name">
                Bonjour {" "}
                <span className="firstName" style={{ color:"#ff0000"}}>{userName?.firstName}</span>
            </h1>
            <p className="congrats">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>        
    );
};

UserName.propTypes = 
{
    userName: PropTypes.shape({
        firstName: PropTypes.string,
    }),
};
