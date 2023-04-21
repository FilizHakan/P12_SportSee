import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from "recharts";


 export default function RadarCharts (performance) 
 {

  const radarData = performance.data.data;

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
          <PolarAngleAxis dataKey="kind" stroke="white" tick={(props) => renderPolarAngleAxis(props)} />
          <Radar dataKey="value" fill="red" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};


function renderPolarAngleAxis({ payload, x, y, cx, cy }) 
{
  return (
    <Text className="polarText" verticalAnchor="middle" y={y + (y - (cy + -20)) / 7} x={x + (x - (cx + 60)) / 3} style={{ fill: "rgba(255, 255, 255)", fontSize: 12 }} >
        {payload.value}
    </Text>
  );
};

