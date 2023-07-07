/**
 * @name ActivityClass
 * @description Creates a new instance of ActivityClass
 * @constructor
 * @param {Object} data - The data used to create the ActivityClass object.
 * @property {number} id - The user ID associated with the data.
 * @property {Array} days - An array of days associated with the user's sessions.
 * @property {Array} kilos - An array of kilogram values associated with the user's sessions.
 * @property {Array} calories - An array of calorie values associated with the user's sessions.
 */
export default class ActivityClass 
{
  constructor (data) 
  {
    this.id = data.userId;
    this.sessions = data.sessions;
    this.days = this.sessions?.map((session) => session.day) || [];
    this.kilos = this.sessions?.map((session) => session.kilogram) || [];
    this.calories = this.sessions?.map((session) => session.calories) || [];
  };
};