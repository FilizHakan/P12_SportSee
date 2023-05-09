import axios from "axios";
import { Performance } from "../models/Performance";
//import { mockedData } from "./apiSetting";

/**  Get Data - Performance
 * @param {function} setPerformanceData - to update dataPerformance
 * @param {number} userId - user id
 */
export default async function getPerformances (
  setPerformanceData, 
  userId, 
  setErrorCode) 
{

  //const dataMock = "./mockedData.json";

  /*if (mockedData) 
  {
    await axios

    .get(dataMock)

    .then((res) => 
    {
      let performanceDataArray = [];
      let data = res.data.performance.data;

      data.forEach((element) => 
      {
        let newData = new Performance(element);
        performanceDataArray.push(newData);
      });

      return setPerformanceData(performanceDataArray.reverse());
    });

  } else {*/

    try 
    {
      await axios
        .get(`http://localhost:3001/user/${userId}/performance`)

        .then((res) => {
          let performanceDataArray = [];
          let data = res.data.data.data;

          data.forEach((element) => 
          {
            let newData = new Performance(element);
            performanceDataArray.push(newData);
          });

          return setPerformanceData(performanceDataArray.reverse());

        });

    } catch (error) {
      console.log(error);
      console.log(error.response);
      return setErrorCode(error.code);
    };

  };
//};