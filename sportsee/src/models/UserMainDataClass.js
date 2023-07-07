/**
 * @name UserClass
 * @description A class for representing the associated data for each user.
 * @param {Object} data - An object containing user data.
 */
export default class UserClass 
{
    constructor(data) 
    {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore || data.score;
        this.keyData = 
        {
            calorieCount: data.keyData.calorieCount,
            proteinCount: data.keyData.proteinCount,
            carbohydrateCount: data.keyData.carbohydrateCount,
            lipidCount: data.keyData.lipidCount,
        };
    };
};