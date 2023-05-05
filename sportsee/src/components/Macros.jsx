import React from "react";
import useFetch from "../service/useFetch";
import { useParams } from "react-router-dom";

import UserName from "./SubComponents/UserName";
import DailyActivity from "./SubComponents/DailyActivity";
import RadarCharts from "./SubComponents/RadarCharts";
import SessionLength from "./SubComponents/SessionLength";
import GoalScore from "./SubComponents/GoalScore";
import EnergyCount from "./SubComponents/EnergyCount";

/**
 * @description Macros is the set up of the API call service
 * @const {object} userId returns a dynamic object parameters from the given URL
 * @const {array} user returns the array user
 * @const {array} session returns the array average session 
 * @const {array} performance returns the array performance
 * @const {array} activity returns the activity array
 * @returns the call from each api addresses
 */
export default function Macros ()
{
    const { userId } = useParams();

    const { data: user } = useFetch(`http://localhost:3001/user/${userId}`);
    const { data: session } = useFetch(`http://localhost:3001/user/${userId}/average-sessions`);
    const { data: performance } = useFetch(`http://localhost:3001/user/${userId}/performance`);
    const { data: activity } = useFetch(`http://localhost:3001/user/${userId}/activity`);

    return (
        <section className="userWrapper">
            <div className="userContainer">
                <div className="userName">{user && <UserName data={user} />}</div>
                <div className="statsContainer">
                    <div className="chartsContainer">
                        <div className="activityContainer">
                            {activity && <DailyActivity data={activity} />}
                        </div>

                        <div className="sessionContainer">
                            {session && <SessionLength data={session} />}
                            {performance && <RadarCharts data={performance} />}
                            {user && <GoalScore data={user} />}
                        </div>
                    </div>

                    <div className="energyContainer">{user && <EnergyCount data={user} />}
                    </div>
                </div>
            </div>
        </section>
    )
}
