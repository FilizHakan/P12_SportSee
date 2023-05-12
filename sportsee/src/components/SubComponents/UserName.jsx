import React from "react";
import PropTypes from "prop-types";

/**
 * @description Fetch the mocked user data to transform them into the name components
 * @param {string} user
 * @const {object} userNameData (id, userInfos, todayScore, keyData)
 * @const {object} userInfos (firstName, lastName, age)
 * @const {string} firstName (user Name)
 * @returns the user's hello message with his/her first name 
 */
export default function UserName (user)
{

    const userNameData = user.data.data;
    const userInfos = userNameData.userInfos;
    const firstName = userInfos.firstName;
    
    return (
        <div className="nameTitle">
            
            <h1 className="name">
                Bonjour {" "}
                <span className="firstName" style={{ color:"#ff0000"}}>{firstName}</span>
            </h1>

            <p className="congrats">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>

        </div>
    );
};

UserName.propTypes = 
{
    firstName: PropTypes.string.isRequired,
};
