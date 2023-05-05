import React from "react";

import CaloriesIcon from "../../assets/calories-icon.svg";
import ProteinsIcon from "../../assets/protein-icon.svg";
import GlucidsIcon from "../../assets/carbs-icon.svg";
import LipidsIcon from "../../assets/fat-icon.svg";

/**
 * @description Fetch the mocked energy data into energy components
 * @param {number} user fetch from each user's info
 * @const {object} keyDatas (id, userInfos, todayScore, keyData)
 * @const {object} energy (calorieCount, proteinCount, carbohydrateCount, lipidCount)
 * @returns values of energy count
 */
export default function EnergyCount (user) 
{

  const keyDatas = user.data.data;
  const energy = keyDatas.keyData;
 

  return (
    <div className="energyCountContainer">
      <div className="calories">
        <img src={CaloriesIcon} className="energy-icons" alt="Fire Icon"></img>
        <div className="energyNumber">
          <p className="energyCalculation">
            {energy.calorieCount.toLocaleString("en-US")}kCal
          </p>

          <p className="energyTitle">Calories</p>
        </div>
      </div>

      <div className="proteins">
        <img src={ProteinsIcon} className="energy-icons" alt="Chicken Icon"></img>
        <div className="energyNumber">
          <p className="energyCalculation">{energy.proteinCount}g</p>
          <p className="energyTitle">Protéines</p>
        </div>
      </div>

      <div className="glucids">
        <img src={GlucidsIcon} className="energy-icons" alt="Apple Icon"></img>
        <div className="energyNumber">
          <p className="energyCalculation">{energy.carbohydrateCount}g</p>
          <p className="energyTitle">Glucides</p>
        </div>
      </div>

      <div className="lipids">
        <img src={LipidsIcon} className="energy-icons" alt="Burger Icon"
        ></img>
        <div className="energyNumber">
          <p className="energyCalculation">{energy.lipidCount}g</p>
          <p className="energyTitle">Lipides</p>
        </div>
      </div>
    </div>
  );
};

