import React from "react";
import PropTypes from "prop-types";
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
 * @param {object} data - data for the bar chart
 * @example 
 * const activity =  [
          {
              day: '2020-07-01',
              kilogram: 70,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 69,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 70,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 70,
              calories: 500
          },
          {
              day: '2020-07-05',
              kilogram: 69,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 69,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 69,
              calories: 390
          }
      ]
 * return (
 *   <Activity activity={activity} />
 * )
 * @returns {JSX.Element} Returns a daily activity bar chart with data from the API
 */

export default function Activity ({ data })
{
    /**
     * Format the date to get the date
     * @param {string} date - a date. Exemple : 2022-10-01
     * @returns formatDay returns only the day
     */
    const day = (date) => 
    {
        return new Date(date).getDate()
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
                    <p className="dailyActivityLabel">{`${payload[1].value /1000} kCal`}</p>
                </div>
            );
        };
        return null;
    }

    return (
        <div className="dailyActivityWrapper">

            <p className="dailyActivityTitle">Activité quotidienne</p>

            <ResponsiveContainer height="195%">

                <BarChart 
                    width={500} 
                    height={300} 
                    data={data.sessions} 
                    margin={{top: 22, left: 25, right: 0, bottom: 0,}} 
                    barGap={8} 
                    barCategoryGap={1}
                >
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" tickFormatter={day} style={{ fill: "#9b9eac", fontsize: 14 }} />
                    <YAxis 
                        yAxisId="kilogram" 
                        orientation={"right"} 
                        keyData={data.sessions.kilogram} 
                        domain={["dataMin -2", "dataMax +1"]} 
                        dx={15} style={{ fill: "#9B9EAC", fontSize: 14 }} 
                        tickCount="3" 
                    />
                    <YAxis 
                        yAxisId="calories" 
                        dataKey={data.sessions.calories}
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
                        dataKey="kilogram"
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

Activity.propTypes = 
{
    data: PropTypes.object,
};