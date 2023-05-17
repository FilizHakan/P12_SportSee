import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from "recharts";
import PropTypes from "prop-types";

// Const for the titles - Performance Radar chart
const performanceTitle = {
  1: 'cardio',
  2: 'energie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité',
}

// Const for performance format - replace 1 by "cardio" and so forth
const formattedData = (data) =>
{
  return data.data.map((d) =>
  ({
    ...d,
    kind: performanceTitle[d.kind],
  }));
}; 

/**
 *@description RadarCharts is the creation of the activity radar chart
 * @param {object} performance - data for performance
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
 *   <Performance performance={performance} /> 
 * )
 * @returns {JSX.Element} the values (number) in a string denominations
 */
 export default function Performance ({ data }) 
 {

  const performanceData = formattedData(data); 

  return (
    <div className="radarChartsData">

      <ResponsiveContainer height="100%">

        <RadarChart 
          cx="48%" 
          cy="50%" 
          outerRadius="50%" 
          data={performanceData}
        >
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="kind" 
            stroke="white" 
            tick={(props) => renderPolarAngleAxis(props)} 
          />
          <Radar 
            dataKey="value" 
            fill="red" 
            fillOpacity={0.6}  
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
      y={y + (y - (cy + -20)) / 7} 
      x={x + (x - (cx + 60)) / 3} 
      style={{ fill: "rgba(255, 255, 255)", fontSize: 12 }} 
    >
        {payload.value}
    </Text>

  );
};

Performance.propTypes = 
{
  data: PropTypes.object
};