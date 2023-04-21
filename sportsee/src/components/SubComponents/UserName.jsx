import React from "react";

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
