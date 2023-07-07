import React from "react";
import { 
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer, 
  RadialBarChart
} from "recharts";
import "./score.css";

/**
 * @description pie chart that fetches scores for each users
 * @param {Object} props - Component properties.
 * @param {Object} props.userScore - User score object.
 * @example
 * const score = 0.12
 * return (
 *   <dataMain score={score} />
 * )
 * @return {JSX.Element} the scores for each users all converted into percentage
 */
export default function Score ({ userScore })
{  
  //console.log(userScore)
  const progression = userScore ? parseInt((userScore.todayScore || userScore.score) * 100) : 0;
  const goalScore = 
  [
    {
      name: "Progression",
      value: progression,
    },
  ];

  return (
    <div className="goalScore">
      <div className="scoreTitle">Score</div>
      <p className="rateGoal">
        <span 
          style={{ 
            fontWeight: 650, 
            fontSize: 24, 
            color: "#000000", 
          }}
        >
            {`${progression}%`}
        </span>
        {" "} de votre objectif
      </p>

      <ResponsiveContainer width="100%" height="115%">
        <RadialBarChart
          data={goalScore}
          startAngle={90}
          endAngle={450}
          cx="50%"
          cy="55%"
          innerRadius="70%"
          outerRadius="83%"
          barSize={10}
        >
          <circle 
            cx="50%" 
            cy="55%" 
            r="80" 
            fill="transparent"
          >
          </circle>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar 
            dataKey="value" 
            cornerRadius={10} 
            fill="red" 
          />
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="goalScore"
          ></text>
        </RadialBarChart>
      
      </ResponsiveContainer>
    </div>
  );
};
