import axios from "axios";

import { User } from "../models/User";
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

