/**
 * @description constructor Pattern - Performance
 * @constructor
 * @param {object} element - A Performance
 */
export class Performance 
{
    constructor (data, element) 
    {
      this._value = element.value;
      this._number = element.kind;
    }
  
    get subject () 
    {
      const kind = [
        "Cardio",
        "Energie",
        "Endurance",
        "Force",
        "Vitesse",
        "Intensité",
      ];
      let newKind = kind[this._number - 1];
  
      return newKind;
    };
  
    get value () 
    {
      return this._value;
    };
};