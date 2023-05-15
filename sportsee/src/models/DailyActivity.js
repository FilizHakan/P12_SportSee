/**
 * @description constructor Pattern - Daily Activity Session
 * @constructor
 * @param {object} data - A Daily Activity Session
 */
export default class DailyActivity
{
    constructor (activity) 
    {
      this._activities = activity.sessions;
    }
  
    getActivityData = () => 
    {
      return this._activities;
    };
};