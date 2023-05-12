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

/**
 *@description RadarCharts is the creation of the activity radar chart
 * @param {array} performance - data for performance
 * @const {object} radarData (data, kind, userId)
 * @param {number} kind values for cardio, energy, endurance, strength, speed, intensity
 * @returns {JSX.Element} the values (number) in a string denominations
 */
 export default function Performance (performance) 
 {

  const radarData = performance.data.data;

  /**
   * @description Converting the mocked kind array data into an object (object value string)
   */
  const radarChartDataTitle = radarData.data.map((data) => 
  {
    switch (data.kind) 
    {
    case 1:
        return {...data, kind: "Intensité"};
    case 2:
        return {...data, kind: "Vitesse"};
    case 3:
        return {...data, kind: "Force"};
    case 4:
        return {...data, kind: "Endurance"};
    case 5:
        return {...data, kind: "Energie"};
    case 6:
        return {...data, kind: "Cardio"};
    default:
        return {...data};
    };
    
  });

  return (
    <div className="radarChartsData">

      <ResponsiveContainer height="80%">

        <RadarChart 
          cx="50%" 
          cy="58%" 
          outerRadius="60%" 
          data={radarChartDataTitle}
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
  performance: PropTypes.arrayOf
  (
    PropTypes.shape 
    ({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

