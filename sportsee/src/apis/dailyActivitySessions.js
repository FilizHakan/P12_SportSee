import axios from "axios";
import { DailyActivitySession } from "../models/DailyActivitySession";
import { mockedData } from "./apiSetting";


/**  
 * @description to get the service data for the daily activity sessions
 * @param {function} setSessionData - to update dataSession
 * @param {number} userId - user id
 */
export default async function getDailyActivitySessions (
  setSessionData, 
  userId, 
  setErrorCode) 
{

  if (mockedData) 
  {
    await axios
    .get("./mock/mockedData.json")
    
    .then((res) => 
    {
      let sessionDataArray = [];
      let data = res.data.activity.sessions;

      data.forEach((element) => 
      {
        let newData = new DailyActivitySession(element);
        sessionDataArray.push(newData);
      });

      return setSessionData(sessionDataArray);
      
    });

  } else {

    try 
    {
      await axios
        .get(`http://localhost:3001/user/${userId}/activity`)
        
        .then((res) => 
        {
          let sessionDataArray = [];
          let data = res.data.data.sessions;

          data.forEach((el) => 
          {
            let newData = new DailyActivitySession(el);
            sessionDataArray.push(newData);
          });

          return setSessionData(sessionDataArray);

        });

    } catch (error) {
      console.log(error);
      console.log(error.response);
      return setErrorCode(error.code);
    };

  };
};

