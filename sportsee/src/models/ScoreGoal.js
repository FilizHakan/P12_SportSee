/**
 * @description constructor Pattern - Goal Score
 * @constructor
 * @param {object} data - A Goal Score
 */
export default class ScoreGoal 
{
    constructor (data, score) 
    {
      data.score ? (this.score = data.score) : (this.score = data.todayScore);
    }
  
    getScoreData = () => {
      return this.score;
    };
};