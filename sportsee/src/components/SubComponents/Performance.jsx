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
 *@description Performance creates the radar chart
 * @param {array} data - data for the chart
 * @returns {JSX.Element} the values (number) in a string denominations
 */
 export default function Performance ({ data }) 
 {

  return (
    <div className="radarChartsData">

      <ResponsiveContainer height="80%">

        <RadarChart 
          cx="50%" 
          cy="58%" 
          outerRadius="60%" 
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="subject" 
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
  data: PropTypes.arrayOf
  (
    PropTypes.shape 
    ({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

