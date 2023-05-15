/**
 * @descrption constructor Pattern - Average Length Session
 * @constructor
 * @param {object} data - length session within a day
 */
export default class SessionLength 
{
    constructor (sessions) 
    {
      this.sessions = sessions.sessions;
    }
  
    getSessionsData = () => 
    {
      return this.sessions;
    };
  
};