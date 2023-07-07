/**
 * @name AverageSessionClass
 * @description A class that transforms session data into a suitable format for the line chart
 * @param {Object} data - An object containing session data
 */
export default class AverageSessionClass 
{
    constructor (data) 
    {
      this.id = data.userId;
      this.sessionTime = this.transformSessionData(data.sessions);
    }
  
    /**
     * @name TransformSessionData
     * @description Transforms session data into a format suitable for a line chart.
     * @param {Array} sessions - An array of session objects.
     * @returns {Array} - An array of objects representing session data in a format suitable for a line chart.
     */
    transformSessionData(sessions) 
    {
        const sessionTime = [];
    
        sessions.forEach((session) => 
        {
            const dayData = sessionTime.find((entry) => entry.day === session.day);
    
            if (dayData) {
            dayData[this.id] = session.sessionLength;
            } else {
                sessionTime.push({
                day: session.day,
                [this.id]: session.sessionLength,
                });
            }
        });
        return sessionTime.sort((a, b) => a.day - b.day);
    };
};