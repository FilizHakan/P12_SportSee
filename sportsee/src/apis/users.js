import axios from "axios";

import { User } from "../models/User";
import { GoalScore } from "../models/GoalScore";
import { mockedData } from "./apiSetting";

/**  
 * @description to get data for the user
 * @param {function} setDataUser - to update the data about the User
 * @param {number} userId - user id
 */
export async function getUsers (
  setUserData, 
  userId, 
  setErrorCode) 
{


  if (mockedData) 
  {
    await axios
    .get("./mock/mockedData.json")
    
    .then((res) => 
    {
      let data = res.data.user;
      let newData = new User(data);
      return setUserData(newData);
    });

  } else {

    try 
    {
      await axios
      .get(`http://localhost:3001/user/${userId}`)
      
      .then((res) => 
      {
        let data = res.data.data;
        let newData = new User(data);
        return setUserData(newData);
      });

    } catch (error) {
      console.log(error);
      console.log(error.response);
      return setErrorCode(error.code);
    };

  };
};

/**  
 * @description to get the data for the goal Score
 * @param {function} setDataPerformance - to update score data
 * @param {number} userId - user id
 */
export async function getGoalScores (
  setGoalScoreData, 
  userId, 
  setErrorCode) 
{

  if (mockedData) 
  {
    await axios
    .get("./mock/mockedData.json")
    
    .then((res) => 
    {
      let data = res.data.user.score;
      let updateData = new GoalScore(data);

      let newData = [
        {
          name: `${updateData.name}`,
          score: updateData.score,
          fill: `${updateData.fill}`,
        },
      ];

      return setGoalScoreData(newData);
    });

  } else {

    try 
    {
      axios
      .get(`http://localhost:3001/user/${userId}`)
      
      .then((res) => 
      {

        if (res.data.data.todayScore) 
        {
          let data = res.data.data.todayScore;
          let updateData = new GoalScore(data);

          let newData = [
            {
              name: `${updateData.name}`,
              score: updateData.score,
              fill: `${updateData.fill}`,
            },
          ];

          return setGoalScoreData(newData);

        } else {

          let data = res.data.data.score;
          let updateData = new GoalScore(data);

          let newData = [
            {
              name: `${updateData.name}`,
              score: updateData.score,
              fill: `${updateData.fill}`,
            },
          ];

          return setGoalScoreData(newData);

        };

      });

    } catch (error) {
      console.log(error);
      console.log(error.response);
      return setErrorCode(error.code);
    };

  };
};

