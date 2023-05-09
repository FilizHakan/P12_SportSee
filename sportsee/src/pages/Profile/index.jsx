import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import UserName from "../../components/SubComponents/UserName";
import EnergyCount from "../../components/SubComponents/EnergyCount";
import Error from "../../components/Error";
import Stats from "../../components/Stats";

import getSessionLengths from "../../apis/sessionLengths";
import getDailyActivitySessions from "../../apis/dailyActivitySessions";
import getPerformances from "../../apis/performances";
import { getGoalScores } from "../../apis/users";
import { getUsers } from "../../apis/users";

import "./profile.css";

/**
 * @description Profile creates a personalised profile page for each users
 * @returns {JSX.Element} Custom Profil Page for each user
 */
export default function Profile ()
{
    /* userId is extracted from the url */
    const { userId } = useParams().id;

    const [ userData, setUserData ] = useState (null) ;
    const [ dailyActivitySessionData, setSessionData ] = useState (null) ;
    const [ sessionLengthData, setSessionLengthData ] = useState (null) ;
    const [ performanceData, setPerformanceData ] = useState (null) ;
    const [ goalScoreData, setGoalScoreData ] = useState (null) ;
    const [ errorCode, setErrorCode ] = useState (null) ;
  
    useEffect ( () => 
    {
      getUsers ( setUserData, userId, setErrorCode ) ;
      getDailyActivitySessions ( setSessionData, userId, setErrorCode ) ;
      getSessionLengths ( setSessionLengthData, userId, setErrorCode ) ;
      getPerformances ( setPerformanceData, userId, setErrorCode ) ;
      getGoalScores ( setGoalScoreData, userId, setErrorCode ) ;
    }, [ userData, userId, setErrorCode ] ) ;


    return (
        <section className="profileContainer">

          <Header />

          <div className="userWrapper">
            { userData &&
              dailyActivitySessionData &&
              sessionLengthData &&
              performanceData &&
              goalScoreData ? 
              (
                <div className="userContainer">

                  <div className="userName">
                    <UserName 
                      firstName={userData.firstName} 
                    />
                  </div>

                  <div className="statsContainer">
                    <Stats 
                      dailyActivitySessionData={dailyActivitySessionData} 
                      sessionLengthData={sessionLengthData}
                      performanceData={performanceData}
                      goalScoreData={goalScoreData} 
                    />
                  </div>

                  <div className="energyContainer">
                  <EnergyCount 
                    macros={userData.keyData} 
                  />
                  </div>

                </div>

            ) : (

                <Error 
                  errorCode={errorCode}
                />
            )}
          </div>

        </section> 

      );
};

Profile.propTypes = 
{
    userData: PropTypes.arrayOf
    (
        PropTypes.shape
        ({
            firstName: PropTypes.string.isRequired,
          })
    ),
    dailyActivitySessionData: PropTypes.arrayOf
    (
      PropTypes.shape
      ({
        calories: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
        kilogram: PropTypes.number.isRequired,
      })
    ),
    sessionLengthData: PropTypes.arrayOf
    (
      PropTypes.shape
      ({
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ),
    performanceData: PropTypes.arrayOf
    (
      PropTypes.shape
      ({
        subject: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
    goalScoreData: PropTypes.arrayOf
    (
      PropTypes.shape
      ({
        fill: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
      })
    ),
};