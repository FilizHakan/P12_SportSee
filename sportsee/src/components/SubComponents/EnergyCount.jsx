import React from "react";
import PropTypes from "prop-types";

import CaloriesIcon from "../../assets/calories-icon.svg";
import ProteinsIcon from "../../assets/protein-icon.svg";
import GlucidsIcon from "../../assets/carbs-icon.svg";
import LipidsIcon from "../../assets/fat-icon.svg";

/**
 * @description Fetch the mocked energy data into energy components
 * @param {object} user - data for the macronutrients
 * @returns {JSX.Element} values of energy count
 */
export default function EnergyCount (user) 
{
  const keyDatas = user.data.data;
  const macros = keyDatas.keyData;

  return (
    <div className="energyCountContainer">
      
      <div className="calories">
        <img 
          src={CaloriesIcon} 
          className="energy-icons" 
          alt="Fire Icon"
        >
        </img>
        <div className="energyNumber">
          <p className="energyCalculation">
            {macros.calorieCount.toLocaleString("en-US")}kCal
          </p>

          <p className="energyTitle">Calories</p>
        </div>
      </div>

      <div className="proteins">
        <img 
          src={ProteinsIcon} 
          className="energy-icons" 
          alt="Chicken Icon"
        >
        </img>
        <div className="energyNumber">
          <p className="energyCalculation">{macros.proteinCount}g</p>
          <p className="energyTitle">Protéines</p>
        </div>
      </div>

      <div className="glucids">
        <img 
        src={GlucidsIcon} 
        className="energy-icons" 
        alt="Apple Icon"
        >
        </img>
        <div className="energyNumber">
          <p className="energyCalculation">{macros.carbohydrateCount}g</p>
          <p className="energyTitle">Glucides</p>
        </div>
      </div>

      <div className="lipids">
        <img 
        src={LipidsIcon} 
        className="energy-icons" 
        alt="Burger Icon"
        >
        </img>
        <div className="energyNumber">
          <p className="energyCalculation">{macros.lipidCount}g</p>
          <p className="energyTitle">Lipides</p>
        </div>
        
      </div>

    </div>

  );
};

EnergyCount.propTypes = 
{
  macros: PropTypes.shape
  ({
    calorieCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
  }),
};

