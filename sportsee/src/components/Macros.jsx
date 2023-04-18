import React from "react";
import useFetch from "../service/useFetch";
import { useParams } from "react-router-dom";

import Name from "./Models/UserName";
import DailyActivity from "./subComponents/DailyActivity";
import RadarCharts from "./subComponents/RadarCharts";
import SessionTime from "./subComponents/SessionTime";
import TodayScore from "./subComponents/TodayScore";
import Energy from "./subComponents/Energy";



function Macros()
{
    const {userId} = useParams();
    const { data:user } = useFetch(`http://localhost:3000/user/${userId}`);
    const { data:session } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
    const { data:performance } = useFetch(`http://localhost:3000/user/${userId}/performance`);
    const { data:activity } = useFetch(`http://localhost:3000/user/${userId}/activity`);

    return (
        <div className="userContainer">

            <div className="nameContainer">{user && <Name data={user} />}
            </div>

            <div className="dataContainer">  

                <div className="chartsContainer">
                    <div className="activityContainer">
                        {activity && <DailyActivity data={activity} />}
                    </div>

                    <div className="sessionsContainer">
                        {session && <SessionTime data={session} />}
                        {performance && <RadarCharts data={performance} />}
                        {user && <TodayScore data={user} />}
                    </div>   
                </div>
        
                <div className="energyContainer">  
                {user && <Energy data={user} />}
                </div>

            </div>

        </div>
    );
}

export default Macros;