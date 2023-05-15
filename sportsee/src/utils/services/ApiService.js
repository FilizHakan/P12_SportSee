export default class ApiService 
{
  /**
   * @param {string} userId
   * @returns {object} user data
   */
  async getUserMainData(userId) 
  {
    const userData = await fetch(
      'http://localhost:3001/user/' + userId + '/'
    ).then((r) => r.json())

    if (typeof userData === 'string') {
      return
    }
    return userData.data
  }

  /**
   * @param {string} userId
   * @returns {object} user activity
   */
  async getUserActivity(userId) 
  {
    const userActivity = await fetch(
      'http://localhost:3001/user/' + userId + '/activity'
    ).then((r) => r.json())
    
    return userActivity.data
  }

  /**
   * @param {string} userId
   * @returns {object} user average sessions
   */
  async getUserAverageSessions(userId) 
  {
    const userAverage = await fetch(
      'http://localhost:3001/user/' + userId + '/average-sessions'
    ).then((r) => r.json())
    return userAverage.data
  }

  /**
   * @param {string} userId
   * @returns {object} user performance
   */
  async getUserPerformance(userId) 
  {
    const userPerformance = await fetch(
      'http://localhost:3001/user/' + userId + '/performance'
    ).then((r) => r.json())
    return userPerformance.data
  }
}