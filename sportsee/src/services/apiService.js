import { dataMocked } from "./apiSetting";
import { USER_ACTIVITY, USER_PERFORMANCE, USER_AVERAGE_SESSIONS } from "../utils/data";
import { USER_MAIN_DATA } from "../utils/data";

const ApiService = {
  getUserMainData: async (userId) => {
    if (dataMocked) {
      const userData = USER_MAIN_DATA.find(
        (item) => item.id === parseInt(userId)
      );
      return { data: userData };
    } else {
      try {
        const response = await fetch(`http://localhost:3001/user/${userId}`);
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (e) {
        console.error(e);
        throw new Error("Serveur inaccessible");
      }
    }
  },

  getUserActivity: async (userId) => {
    if (dataMocked) {
      const userActivity = USER_ACTIVITY.find(
        (item) => item.userId === parseInt(userId)
      );
      return { data: userActivity };
    } else {
      try {
        const response = await fetch(
          `http://localhost:3001/user/${userId}/activity`
        );

        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (e) {
        console.error(e);
        throw new Error("Serveur inaccessible");
      }
    }
  },

  getUserAverageSessions: async (userId) => {
    if (dataMocked) {
      const userAverageSessions = USER_AVERAGE_SESSIONS.find(
        (item) => item.userId === parseInt(userId)
      );
      return { data: userAverageSessions };
    } else {
      try {
        const response = await fetch(
          `http://localhost:3001/user/${userId}/average-sessions`
        );
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (e) {
        console.error(e);
        throw new Error("Serveur inaccessible");
      }
    }
  },

  getUserPerformance: async (userId) => {
    if (dataMocked) {
      const userPerformance = USER_PERFORMANCE.find(
        (item) => item.userId === parseInt(userId)
      );
      return { data: userPerformance };
    } else {
      try {
      const response = await fetch(
        `http://localhost:3001/user/${userId}/performance`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data;
      } else {
        console.error(`Status code: ${response.status}`);
        throw new Error("Serveur inaccessible");
      }
      } catch (e) {
        console.error(e);
        throw new Error("Serveur inaccessible");
      }
    }
  }
};

export default ApiService;