import React from "react";
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer, 
} from "recharts";

export default function GoalScore (user)
{

  const userScoreData = user.data.data;
  const todayUserScoreData = userScoreData.todayScore * 100 || userScoreData.score * 100;

  const TSData = [
    {
      name: "A",
      uv: todayUserScoreData,
      pv: 2400,
      fill: "red",
    },
    {
      name: "B",
      uv: 100,
      pv: 4567,
      fill: "#fbfbfb",
    },
  ];

  return (
    <div className="goalScore">
      <p className="scoretitle">Score</p>
      <p className="rateGoal">
        <span style={{ fontWeight: 700, fontSize: 26, color: "#000000" }}>
          {todayUserScoreData}%
        </span>
        {" "} de votre objectif
      </p>

      <ResponsiveContainer aspect={1.5}>
        <RadialBarChart 
          width={730} 
          height={250} 
          innerRadius={80} 
          outerRadius={100} 
          data={TSData} 
          startAngle={90} 
          endAngle={360} 
        >
          <RadialBar dataKey="uv" cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};