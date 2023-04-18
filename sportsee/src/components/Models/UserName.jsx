import React from "react";
import HandsClapping from "../../assets/hands-clapping.png";

function UserName(user) {
    const data = user.data.data;
    const userInfos = data.userInfos;
    const name = userInfos.firstName;

    return (
        <div className="hello-name">
            <h1 className="hello">
                Bonjour 
                <span className="firstName">{name}</span>
            </h1>

            <p className="congrats">
                "Félicitation! Hier, vous avez explosé vos objectifs"
                <img src={HandsClapping} className="handsClapping" alt="icon-handsClapping">
                </img>
            </p>
        </div>
    );
}

export default UserName;