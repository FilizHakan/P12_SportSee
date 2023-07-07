/**
 * @name PerformanceClass
 * @description Creates a new instance of PerformanceClass
 * @constructor
 * @param {Object} data - The data used to create the PerformanceClass object
 * @property {number} userId - The user ID associated with the data
 * @property {Array} performanceData - An array of objects that contain performance, strength, cardio, intensity
 */
class PerformanceClass 
{
  constructor (userId, kind, performanceData) 
  {
    console.log(performanceData)
    this.userId = userId;
    this.kind = kind;
    this.data = performanceData.map((d) =>
    {
      return {
        kind: this.kind[d.kind],
        value: d.value,
      };
    });
  };
};

export default PerformanceClass;