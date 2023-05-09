import axios from "axios";
import { SessionLength } from "../models/SessionLength";
import { mockedData } from "./apiSetting";

/**  
 * @description get service data for the average length session
 * @param {function} setSessionLengthData - it is to update the average length session data
 * @param {number} userId - user id
 */
export default async function getSessionLengths
(
  setSessionLengthData, 
  userId, 
  setErrorCode) 
{

    if (mockedData) 
    {
      await axios
      .get("./mock/mockedData.json")
      
      .then((res) => 
      {
        let sessionLengthDataArray = [];
        let response = res.data["average-session"].sessions;

        response.forEach((element) => 
        {
          let newData = new SessionLength(element);
          sessionLengthDataArray.push(newData);
        });

        return setSessionLengthData(sessionLengthDataArray);

      });

    } else {

      try 
      {
        await axios
          .get(`http://localhost:3001/user/${userId}/average-sessions`)

          .then((res) => 
          {
            let sessionLengthDataArray = [];
            let response = res.data.data.sessions;

            response.forEach((element) => 
            {
              let newData = new SessionLength(element);
              sessionLengthDataArray.push(newData);
            });

            return setSessionLengthData(sessionLengthDataArray);

          });

      } catch (error) {
        console.log(error);
        console.log(error.response);
        return setErrorCode(error.code);
      };

    };
};