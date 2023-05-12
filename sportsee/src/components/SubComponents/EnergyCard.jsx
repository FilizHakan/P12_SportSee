import React from "react";
import PropTypes from "prop-types";

/**
 * @description Energy Count
 * @param {number} data - data for the macronutrients
 * @param {number} data - The data for the nutrient
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
 *   <Energy data={keyData} /> 
 * )
 * @returns {JSX.Element} values of energy count
 */
export default function EnergyCard ({ data, name, className, icon }) 
{

  return (
    <div className="energyCountContainer">
      <div className={className}>
        <img src={icon} alt="icon" className="energy-icons" />
      </div>
      <div className="energyNumber">
        <p className="energyCalculation">
          {data}
        </p>
        <span className="nutrient__quantity">
          {name === 'Calories' ? 'kCal' : 'g'}
        </span>
        <p className="energyTitle">{name}</p>
      </div>
    </div>
  );
};

EnergyCard.propTypes = 
{
  kayData: PropTypes.object
};

