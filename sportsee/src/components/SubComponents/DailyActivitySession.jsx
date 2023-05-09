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
import PropTypes from "prop-types";

/**
 * @description Creating a daily activity bar chart with recharts
 * @param {array} data - data for the bar chart
 * @returns {JSX.Element} Returns a daily activity bar chart with data from the API
 */

export default function DailyActivitySession ({ data })
{

    /**
     * @description Creation of a custom tooltip for the daily activity chart
     * @param {number | string} param0
     * @returns the converted the denominations and values (kg and kCal) in a custom tooltip
     */
    function CustomTooltip({ payload, active })
    {
        if (active && payload && payload.length)
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
                    data={data} 
                    margin={{top: 22, left: 25, right: 0, bottom: 0,}} 
                    barGap={8} 
                    barCategoryGap={1}
                >
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" style={{ fill: "#9b9eac", fontsize: 14 }} />
                    <YAxis 
                        yAxisId="kilogram" 
                        orientation={"right"} 
                        dataKey="kilogram" 
                        domain={["dataMin -2", "dataMax +1"]} 
                        dx={15} style={{ fill: "#9B9EAC", fontSize: 14 }} 
                        tickCount="3" 
                    />
                    <YAxis 
                        yAxisId="calories" 
                        dataKey="calories" 
                        hide={true} 
                    />
                    <Tooltip 
                        wrapperStyle={{ outline: "none" }}  
                        content={<CustomTooltip />} 
                    />
                    <Legend 
                        verticalAlign="top" 
                        height={70} 
                        align="right" 
                        iconType="circle" 
                        iconSize={10} 
                        formatter={renderColorfullLegendText} 
                    />
                    <Bar 
                        yAxisId="kilogram" 
                        name="Poids (Kg)" 
                        dataKey="Kilogram" 
                        fill="#282d30" 
                        radius={[5, 5, 0, 0]} 
                        barSize={10} 
                    />
                    <Bar 
                        yAxisId="calories" 
                        name="Calories brûlées (KCal)" 
                        dataKey="calories" 
                        fill="#e60000" 
                        radius={[5, 5, 0, 0]} 
                        barSize={10} 
                    />
                </BarChart>
                
            </ResponsiveContainer>

        </div>
        
    );
};

DailyActivitySession.propTypes = 
{
    data: PropTypes.arrayOf 
    (
      PropTypes.shape 
      ({
        calories: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
        kilogram: PropTypes.number.isRequired,
      }),
    ),
};