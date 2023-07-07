import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Text,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";
import "./performance.css";
/**
 * @name Performance
 * @description Performance is the creation of the activity radar chart
 * @param {object} userPerformance - object containing the user's performance data
 * @param {boolean} isPerformanceDataLoaded shows if the performance data are loaded
 * @example
 * const performance = {
      userId: 18,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 200,
              kind: 1
          },
          {
              value: 240,
              kind: 2
          },
          {
              value: 80,
              kind: 3
          },
          {
              value: 80,
              kind: 4
          },
          {
              value: 220,
              kind: 5
          },
          {
              value: 110,
              kind: 6
          }
      ]
  }
 * return (
 *   <Performance userPerformance={userPerformance} /> 
 * )
 * @returns {JSX.Element} the values (number) in a string denominations
 */
 export default function Performance ({ userPerformance }) 
 {
  // console.log("userPerformance:", userPerformance);
  // Const for the titles - Performance Radar chart
  const performanceTitle = 
  {
    cardio: 'cardio',
    energy: 'energie',
    endurance: 'endurance',
    strength: 'force',
    speed: 'vitesse',
    intensity: 'intensité',
  }

    /**
     * An object containing angles in degrees for positioning categories (axes) around the RadarChart.
     */
    const sortTitle = 
    {
      5: 90, // intensity
      4: 150, // cardio
      3: 210, // energy
      2: 270, // endurance
      1: 330, // strength
      6: 30, // speed
    };

  const keys = Object.keys(sortTitle);
  
  // Const for performance format - replace 1 by "cardio" and so forth
  const radarData = userPerformance
    ? userPerformance.data
      .map((d, index) => ({
        kind: performanceTitle[d.kind],
        value: d.value,
        angle: sortTitle[keys[index]],
      }))
      .sort((a, b) => a.angle - b.angle)  
    : null;

  return (
        <div className="radarChartsData">
          <ResponsiveContainer>
            <RadarChart 
              key={userPerformance ? userPerformance.userId : null}
              cx="50%" 
              cy="50%" 
              outerRadius="58%"
              data={radarData}
            >
              <PolarGrid radialLines={false}/>
              <PolarAngleAxis 
                dataKey="kind" 
                tick={(props) => renderPolarAngleAxis(props)} 
              />
              <Radar 
                dataKey="value" 
                fill="red" 
                fillOpacity={0.6}  
                name="Performance"
              />
            </RadarChart>
          </ResponsiveContainer>

        </div>
  );
};

/** 
 *@description renderPolarAngleAxis displays the position of the values (cardio, energy, endurance, strength, speed, intensity) in the radar chart
 * @param {number} payload
 * @param {number} x (horizontal axe)
 * @param {number} y (vertical axe)
 * @param {number} cx (displays values on the horizontal axis)
 * @param {number} cy (displays values on the vertical axis)
 * @returns the positioning of each values on the axes and their given style
 */
 function renderPolarAngleAxis({ payload, x, y, cx, cy }) 
 {
 
   return (
     <Text 
       className="polarText" 
       verticalAnchor="middle" 
       y={y + (y - (cy + -15)) / 7} 
       x={x + (x - (cx + 60)) / 3} 
       style={{ fill: "rgba(255, 255, 255, 1)", fontSize: "0.7rem"}} 
     >
         {payload.value}
     </Text>
 
   );
 };

Performance.propTypes = 
{
  userPerformance: PropTypes.object,
};