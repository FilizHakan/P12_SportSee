import { useState } from "react";
import { useParams } from "react-router-dom";
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
    return <h2>Oopsi!! We can't reach the server. Please try again later.</h2>
  }

  if (!dataMain) 
  {
    return <h2>User not found.</h2>
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

                      <div className="energyContainer">
                        <EnergyCard
                          data={dataMain.keyData.calorieCount}
                          name="calories"
                          icon={CaloriesIcon}
                        />
                        <EnergyCard
                          data={dataMain.keyData.proteinCount}
                          name="proteins"
                          icon={ProteinsIcon}
                        />
                        <EnergyCard
                          data={dataMain.keyData.carbohydrateCount}
                          name="glucids"
                          icon={GlucidsIcon}
                        />
                        <EnergyCard
                          data={dataMain.keyData.lipidCount}
                          name="lipids"
                          icon={LipidsIcon}
                        />
                      </div>

                  </div>
              </div>
          </section>

        </div> 
    );
};