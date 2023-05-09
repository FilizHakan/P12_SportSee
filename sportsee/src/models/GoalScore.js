/**
 * @description constructor Pattern - Goal Score
 * @constructor
 * @param {object} data - A Goal Score
 */
export class GoalScore 
{
    constructor (data) 
    {
      this._score = data;
    }
  
    get name () 
    {
      return "score";
    };
  
    get score () 
    {
      let score = this._score * 100;
      return score;
    };
  
    get fill () 
    {
      return "#ff0000";
    };
};