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

/**
 * @description Creating a daily activity bar chart with recharts
 * @param {array | number} activity
 * @const {array | number} activityData
 * @const {array | number} activitySessions
 * @returns Returns a daily activity bar chart with data from the API (retrieved from P12_SportSee_Back)
 */

export default function DailyActivity (activity)
{

    const activityData = activity.data.data;
    const activitySessions = activityData.sessions;

    /**
     * @description Converting the mocked data "dates" into a week (seven day period) for the bar chart
     */

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

    
    /**
     * @description converting the energy units (calories => kCal)
     * @param {number} C are the calories data
     * @returns the converted values (calories => kCal) in the bar chart
     */
    let kCal = (C) =>
    {
        return C.calories;
    }

    /**
     * @description Converting the weight units (weight => Kilogram)
     * @param {number} W are the weight data
     * @returns the converted values (weight => Kilogram) in the bar chart
     */
    let Kg = (W) =>
    {
        return W.kilogram;
    }

    /**
     * @description Creation of a custom tooltip for the daily activity chart
     * @param {number | string} param0
     * @returns the converted the denominations and values (kg and kCal) in a custom tooltip
     */
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

    /**
     * @description Creation of a function to adapt the color in the bar chart
     * @param {color} value
     * @returns the desired color of bar chart's text legend
     */
    const renderColorfullLegendText = (value) => 
    {
        return <span style={{ color: "#74798c" }}>{value}</span>;
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