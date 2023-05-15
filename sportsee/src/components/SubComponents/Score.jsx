import React from "react";
import { 
  PieChart,
  Pie,
  Cell, 
  ResponsiveContainer, 
  Legend,
} from "recharts";
import PropTypes from "prop-types";

/**
 * @description fetch scores for each users
 * @param {number} score
 * @example
 * const score = 0.12
 * return (
 *   <dataMain score={score} />
 * )
 * @return {JSX.Element} the scores for each users all converted into percentage
 */
export default function Score ({ data })
{
  const progression = data.score ?? data.todayScore;
  const remaining = 1 - progression;
  const goalScore = 
  [
    { name: 'progression', value: progression, color: 'red' },
    { name: 'remaining', value: remaining, color: 'transparent' },
  ];
  const COLORS = ['red', 'transparent'];

  /**
    * @description Creation of a custom legend for the goal score chart
    * @param {number | string} param0
    * @returns {JSX.Element} the converted the denominations and values (kg and kCal) in a custom tooltip
    */ 
  function CustomizedLegend ({ progression }) 
  {
    return (
      <div>
        <div className="scoretitle">Score</div>
          <p className="rateGoal">
            <span style={{ fontWeight: 700, fontSize: 26, color: "#000000" }}>
            {`${progression * 100}%`}
            </span>
            {" "} de votre objectif
          </p>
      </div>
    );
  }

  return (
    <div className="goalScore">
      <ResponsiveContainer height="100%">

      <PieChart
          margin={{
            left: 1,
            top: 1,
            right: 1,
            bottom: 1,
          }}
        >
          <circle 
            cx="50%" 
            cy="50%" 
            r={'30%'} 
            fill="white" 
          />
          <Pie
            dataKey={goalScore.value}
            data={goalScore}
            fill="red"
            innerRadius={'50%'}
            outerRadius={'57%'}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            cornerRadius="100%"
          >
            {goalScore.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            content={<CustomizedLegend progression={progression} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

Score.propTypes = 
{
  data: PropTypes.number,
};