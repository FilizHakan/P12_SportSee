import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ApiService from "../../services/apiService";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import UserName from "../../components/Dashboard/UserName/UserName";
import Activity from "../../components/Dashboard/Activity/Activity";
import Performance from "../../components/Dashboard/Performance/Performance";
import AverageSession from "../../components/Dashboard/AverageSession/AverageSession";
import Score from "../../components/Dashboard/Score/Score";
import EnergyCard from "../../components/Dashboard/EnergyCards/EnergyCard";

import CaloriesIcon from "../../assets/calories-icon.svg"
import ProteinsIcon from "../../assets/protein-icon.svg";
import GlucidsIcon from "../../assets/carbs-icon.svg";
import LipidsIcon from "../../assets/fat-icon.svg";

import ActivityClass from "../../models/ActivityClass";
import UserClass from "../../models/UserMainDataClass";
import PerformanceClass from "../../models/PerformanceClass";
import AverageSessionClass from "../../models/AverageSessionClass";

import "./profile.css";

/**
 * @description Profile creates a personalised profile page for each users
 * @returns {JSX.Element} Custom Profil Page for each user
 */
export default function Profile ()
{

  const { userId } = useParams();

  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [sessionTime, setSessionTime] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)


  useEffect( () => 
  {
    async function fetchData ()
    {
      try {
        const [
          userData,
          userActivityData,
          performanceData,
          userAverageSessionData,
        ] = await Promise.all([
          ApiService.getUserMainData(userId),
          ApiService.getUserActivity(userId),
          ApiService.getUserPerformance(userId),
          ApiService.getUserAverageSessions(userId),
        ]);

        const newUserName = new UserClass(userData.data);
        setUserName(newUserName);

        const newUserActivity = new ActivityClass(userActivityData.data);
        setUserActivity(newUserActivity);

        const newUser = new UserClass(userData.data);
        setUserData(newUser);

        const newUserScore = new UserClass(userData.data);
        setUserScore(newUserScore);

        const newUserPerformance = new PerformanceClass(
          userId,
          performanceData.data.kind,
          performanceData.data.data
        );
        setUserPerformance(newUserPerformance);

        const newUserAverageSessions = new AverageSessionClass(userAverageSessionData.data);

        const sessionTime = newUserAverageSessions.sessionTime.map((entry) => ({
            day: entry.day,
            [`User${userId}`]: entry[userId],
          })
        );
          setSessionTime(sessionTime);

      } catch(error) {
      
        console.log(error.message)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

      fetchData();

  }, [userId]);


  if (isLoading) 
  {
    return null;
  }

  if (isError) 
  {
    return <Navigate replace to="../../pages/Error404" />;
  }

  if (!userData) 
  {
    return <Navigate replace to="../../pages/Error404" />;
  }

    return (
        <div className="profileContainer">
          <Header />
          <section className="userWrapper">
              <div className="userContainer">
                <div className="userName"><UserName userName={userName} /></div>
                <div className="statsContainer">
                  <div className="chartsContainer">
                    <div className="activityContainer">
                      <Activity userActivity={userActivity} />
                    </div>

                    <div className="sessionContainer">
                      <AverageSession sessionTime={sessionTime} userId={parseInt(userId)} />
                      <Performance userPerformance={userPerformance} />
                      <Score userScore={userScore} />
                    </div>
                  </div>
          
                  {userData && (
                    <div className="energyCountContainer">
                      <EnergyCard
                        data={userData.keyData.calorieCount}
                        name="Calories"
                        icon={CaloriesIcon}
                        className="calories"
                      />
                      <EnergyCard
                        data={userData.keyData.proteinCount}
                        name="Proteines"
                        icon={ProteinsIcon}
                        className="proteins"
                      />
                      <EnergyCard
                        data={userData.keyData.carbohydrateCount}
                        name="Glucides"
                        icon={GlucidsIcon}
                        className="glucids"
                      />
                      <EnergyCard
                        data={userData.keyData.lipidCount}
                        name="Lipides"
                        icon={LipidsIcon}
                        className="lipids"
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
    );
};

EnergyCard.propTypes = 
{
  userData: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      proteinCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
      }),
  }),
};












