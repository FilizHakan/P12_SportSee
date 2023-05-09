import React from "react";
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer, 
} from "recharts";
import PropTypes from "prop-types";

/** 
 * @description Goal score is the radial bar chart chart
 * @param {array} data - data for chart
 * @return {JSX.Element}
 */
export default function GoalScore ({ data })
{

  return (
    <div className="goalScore">

      <p className="scoretitle">Score</p>
      
      <p className="rateGoal">
        <span style={{ fontWeight: 700, fontSize: 26, color: "#000000" }}>
        {data[0].score}%
        </span>
        {" "} de votre objectif
      </p>

      <ResponsiveContainer height="110%">

        <RadialBarChart 
          width={730} 
          height={200} 
          innerRadius={80} 
          outerRadius={100} 
          data={data} 
          startAngle={90} 
          endAngle={360} 
        >
          <RadialBar 
            dataKey={"score"} 
            cornerRadius={50} 
          />
        </RadialBarChart>

      </ResponsiveContainer>

    </div>
  );
};

GoalScore.propTypes = 
{
  data: PropTypes.arrayOf
  (
    PropTypes.shape
    ({
      fill: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ),
};