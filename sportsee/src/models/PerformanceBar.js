/**
 * @description constructor Pattern - Performance
 * @constructor
 * @param {object} data- A Performance
 */
export default class PerformanceBar
{
    constructor (performance) 
    {
      this._performance = performance.data;
    }
  
    getPerformanceData = () => 
    {
      return this.performance;
    };
};