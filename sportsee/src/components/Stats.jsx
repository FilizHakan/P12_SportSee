import React from "react";
import PropTypes from "prop-types";

import DailyActivitySession from "./SubComponents/DailyActivitySession";
import GoalScore from "./SubComponents/GoalScore";
import Performance from "./SubComponents/Performance";
import SessionLength from "./SubComponents/SessionLength";


/** 
 * @description contains the whole dashboard stats for each user
 * @param {array} dailyActivitySessionData - Daily Activities sessions
 * @param {array} sessionLengthData - Average Length sessions
 * @param {array} performanceData - Performances
 * @param {array} goalScoreData - Goal Scores
 * @return {JSX.Element}
 */


export default function Stats ({ 
  dailyActivitySessionData, 
  sessionLengthData, 
  performanceData, 
  goalScoreData })
{

    return (
        <div className="activityContainer">
          <DailyActivitySession data={dailyActivitySessionData} />
          <div className="chartsContainer">
            <SessionLength data={sessionLengthData} />
            <Performance data={performanceData} />
            <GoalScore data={goalScoreData} />
          </div>
        </div>
      );
};

Stats.propTypes = 
{
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
        sessionLenght: PropTypes.number.isRequired,
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
  

