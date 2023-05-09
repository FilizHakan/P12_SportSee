/**
 * @description constructor Pattern for the User information
 * @constructor
 * @param {object} data - user information
 */
export class User
{
    constructor (data) 
    {
      this._firstname = data.userInfos.firstName;
      this._keyData = data.keyData;
    }
  
    get firstName () 
    {
      return this._firstname;
    };
  
    get keyData () 
    {
      return this._keyData;
    };
};
