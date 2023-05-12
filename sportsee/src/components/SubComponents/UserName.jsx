import React from "react";
import PropTypes from "prop-types";

/**
 * @description Fetch the mocked user data to transform them into the name components
 * @param {string} firstname (user Name)
 * @returns the user's hello message with his/her first name 
 */
export default function UserName ({ firstname })
{
    
    return (
        <div className="nameTitle">
            
            <h1 className="name">
                Bonjour {" "}
                <span className="firstName" style={{ color:"#ff0000"}}>{firstname}</span>
            </h1>

            <p className="congrats">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>

        </div>
    );
};

UserName.propTypes = 
{
    firstname: PropTypes.string.isRequired,
};
