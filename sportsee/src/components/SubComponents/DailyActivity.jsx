import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function DailyActivity (activity)
{

    const activityData = activity.data.data;
    const activitySessions = activityData.sessions;

    let day = activitySessions.map((data) =>
    {
        switch (new Date(data.day).getDate())
        {
            case 1:
                return {...data, day: "1"};
            case 2:
                return {...data, day: "2"};
            case 3:
                return {...data, day: "3"};
            case 4:
                return {...data, day: "4"};
            case 5:
                return {...data, day: "5"};
            case 6:
                return {...data, day: "6"};
            case 7:
                return {...data, day: "7"};
            default:
                return {...data };                                                      
        };
    });

    let kCal = (C) =>
    {
        return C.calories;
    }

    let Kg = (W) =>
    {
        return W.kilogram;
    }

    function CustomTooltip({ payload, active })
    {
        if (active)
        {
            return (
                <div className="customTooltipContainer">
                    <p className="dailyActivityLabel">{`${payload[0].value} Kg`}</p>
                    <p className="dailyActivityDescendantLabel">{`${payload[1].value /1000} kCal`}</p>
                </div>
            );
        };
        return null;
    }

    const renderColorfullLegendText = (value) => 
    {
        return <span style={{ color: "#74798C" }}>{value}</span>;
    };

    return (
        <div className="dailyActivityWrapper">

            <p className="dailyActivityTitle">Activité quotidienne</p>

            <ResponsiveContainer height="195%">

                <BarChart 
                    width={500} 
                    height={300} 
                    data={day} 
                    margin={{top: 22, left: 25, right: 0, bottom: 0,}} 
                    barGap={8} 
                    barCategoryGap={1}
                >
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" style={{ fill: "#9b9eac", fontsize: 14 }} />
                    <YAxis yAxisId="kilogram" orientation={"right"} keyData={Kg} domain={["dataMin -2", "dataMax +1"]} dx={15} style={{ fill: "#9B9EAC", fontSize: 14 }} tickCount="3" />
                    <YAxis yAxisId="calories" dataKey={kCal} hide={true} />
                    <Tooltip wrapperStyle={{ outline: "none" }}  content={<CustomTooltip />} />
                    <Legend verticalAlign="top" height={70} align="right" iconType="circle" iconSize={10} formatter={renderColorfullLegendText} />
                    <Bar yAxisId="kilogram" name="Poids (Kg)" dataKey={Kg} fill="#282d30" radius={[5, 5, 0, 0]} barSize={10} />
                    <Bar yAxisId="calories" name="Calories brûlées (KCal)" dataKey={kCal} fill="#e60000" radius={[5, 5, 0, 0]} barSize={10} />
                </BarChart>
                
            </ResponsiveContainer>

        </div>
    );
};