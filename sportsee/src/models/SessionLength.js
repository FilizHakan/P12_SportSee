/**
 * @descrption constructor Pattern - Average Length Session
 * @constructor
 * @param {object} data - length session within a day
 */
export class SessionLength 
{
    constructor (data) 
    {
      this._day = data.day;
      this._sessionLength = data.sessionLength;
    }
  
    get day () 
    {
      const days = ["L", "M", "M", "J", "V", "S", "D"];
  
      let newDate = days[this._day - 1];
      return newDate;
    };
  
    get sessionLength () 
    {
      return this._sessionLength;
    };
};