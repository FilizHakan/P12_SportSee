import mock from "../data";

export default class GetData {
  /**
   * @param {string} userId
   * @returns {object} user main data
   */
  async getUserMainData(userId) {
    const userData = mock.USER_MAIN_DATA.find(
      (res) => res.id === parseInt(userId)
    )
    return userData
  }

  /**
   * @param {string} userId
   * @returns {object} user activity
   */
  async getUserActivity(userId) {
    const userActivity = mock.USER_ACTIVITY.find(
      (res) => res.userId === parseInt(userId)
    )
    return userActivity
  }

  /**
   * @param {string} userId
   * @returns {object} user average sessions
   */
  async getUserAverageSessions(userId) {
    const userAverage = mock.USER_AVERAGE_SESSIONS.find(
      (res) => res.userId === parseInt(userId)
    )
    return userAverage
  }

  /**
   * @param {string} userId
   * @returns {object} user performance
   */
  async getUserPerformance(userId) {
    const userPerformance = mock.USER_PERFORMANCE.find(
      (res) => res.userId === parseInt(userId)
    )
    return userPerformance
  }
}