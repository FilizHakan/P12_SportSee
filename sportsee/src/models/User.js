/**
 * @description constructor Pattern for the User information
 * @constructor
 * @param {object} data - user information
 */
export default class User
{
    constructor (data) 
    {
      this._userId = data.id;
      this._firstname = data.userInfos.firstName;
      this._keyData = data.keyData;
    }
  
    getFirstName = () => 
    {
      return this._firstName;
    };

    getEnergyData = () => 
    {
      return this._keyData;
    };
};
