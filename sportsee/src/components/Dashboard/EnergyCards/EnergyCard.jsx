import React from "react";
import PropTypes from "prop-types";
import "./energyCards.css";
/**
 * @description Energy Count
 * @param {number} data - The data for the macronutrients
 * @param {string} name - The name of the nutrient
 * @param {string} className - The classname for the nutrient style
 * @param {url} icon - The URL to call the nutrient icon
 * @example
 * const keyData = {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50
      }
 * return (
 *   <Energy userData={userData.keyData.} /> 
 * )
 * @returns {JSX.Element} values of energy count
 */
export default function EnergyCard ({ data, name, className, icon }) 
{
  return (
      <div className="energyContainer">
        <div className={className}>
          <img src={icon} alt="icon" className="energy-icons" />
        </div>
        <div className="energyNumber">
          <p className="energyCalculation">
            {data}{" "}{name === 'Calories' ? 'kCal' : 'g'}
            
          </p>
          <p className="energyTitle">{name}</p>
        </div>
      </div>
  );
};

EnergyCard.propTypes = 
{
  data: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
};


