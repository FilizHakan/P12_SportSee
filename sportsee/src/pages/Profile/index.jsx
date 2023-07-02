import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
//import { SourceContext } from "../../utils/context/index";
import ApiService from "../../utils/services/ApiService";

import Header from "../../components/Header";
import UserName from "../../components/SubComponents/UserName";
import Activity from "../../components/SubComponents/Activity";
import Performance from "../../components/SubComponents/Performance";
import AverageSession from "../../components/SubComponents/AverageSession";
import Score from "../../components/SubComponents/Score";
import EnergyCard from "../../components/SubComponents/EnergyCard";

import CaloriesIcon from "../../assets/calories-icon.svg"
import ProteinsIcon from "../../assets/protein-icon.svg";
import GlucidsIcon from "../../assets/carbs-icon.svg";
import LipidsIcon from "../../assets/fat-icon.svg";

import "./profile.css";

/**
 * @description Profile creates a personalised profile page for each users
 * @returns {JSX.Element} Custom Profil Page for each user
 */
export default function Profile ()
{

  const { userId } = useParams();

  const [dataMain, setDataMain] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)

  const source = new ApiService();

    Promise.all
    ([
      source.getUserMainData(userId),
      source.getUserActivity(userId),
      source.getUserAverageSessions(userId),
      source.getUserPerformance(userId),
    ])
      .then(([userInfos, userActivities, userSessions, userPerf]) => 
      {
        setDataMain(userInfos)
        setActivity(userActivities)
        setAverageSessions(userSessions)
        setPerformance(userPerf)
      })
      .catch((e) => 
      {
        console.log(e.message)
        setError(true)
      })
      .finally(() => 
      {
        setIsLoading(false)
      })


  if (isLoading) 
  {
    return null
  }

  if (isError) 
  {
    return <Navigate replace to="../../pages/Error503" />
  }

  if (!dataMain) 
  {
    return <Navigate replace to="../../pages/Error404" />
  }


    return (
        <div className="profileContainer">
          
          <Header />

          <section className="userWrapper">
              <div className="userContainer">
                  <div className="userName"><UserName firstname={dataMain.userInfos.firstName} /></div>
                  <div className="statsContainer">
                      <div className="chartsContainer">
                          <div className="activityContainer">
                              {activity && <Activity data={activity} />}
                          </div>

                          <div className="sessionContainer">
                              {averageSessions && <AverageSession data={averageSessions} />}
                              {performance &&<Performance data={performance} />}
                              {dataMain && <Score data={dataMain} />}
                          </div>
                      </div>

                      <div className="energyCountContainer">
                        <EnergyCard
                          data={dataMain.keyData.calorieCount}
                          name="Calories"
                          icon={CaloriesIcon}
                          className="calories"
                        />
                        <EnergyCard
                          data={dataMain.keyData.proteinCount}
                          name="Proteines"
                          icon={ProteinsIcon}
                          className="proteins"
                        />
                        <EnergyCard
                          data={dataMain.keyData.carbohydrateCount}
                          name="Glucides"
                          icon={GlucidsIcon}
                          className="glucids"
                        />
                        <EnergyCard
                          data={dataMain.keyData.lipidCount}
                          name="Lipides"
                          icon={LipidsIcon}
                          className="lipids"
                        />
                      </div>

                  </div>
              </div>
          </section>

        </div> 
    );
};