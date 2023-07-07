import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";
import "./averageSession.css";
/**
 * @description Create a custom tooltip
 * @param {bool} active - a boolean denoting if a tooltip should be displayed when a user mouses over the chart on desktop
 * @param {array} payload - the data the tooltip will be displaying from the chart
 * @returns {JSX.Element} CustomTooltip returns a custom tooltip
 */
const CustomTooltip = ({ payload, active }) =>
{
  if (active && payload && payload.length) 
  {
    return (
      <div className="customTooltip">
        <p className="sessionLabel">
          {payload[0].value}
          {" "}min
        </p>
      </div>
    );
  };
  return null;
};

/**
 * @name CustomCursor
 * @description Create a custom cursor
 * @param {array} points - the current position of the cursor coordinate x and y
 * @param {number} width - the width of the graph
 * @returns CustomCursor returns a cursor in the shape of a rectangle in the background
 */
const CustomCursor = ({ points, width }) => 
{
  const { x } = points[0]
  return (
    <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />
  )
}

/**
 * @name AverageSession
 * @description AverageSession is the chart to gather the session time
 * @param {Object[]} SessionTime - Array of objects representing the chart data.
 * @param {number} userId - User's ID.
 * @example
 * const sessions = [
          {
              day: 1,
              sessionLength: 30
          },
          {
              day: 2,
              sessionLength: 23
          },
          {
              day: 3,
              sessionLength: 45
          },
          {
              day: 4,
              sessionLength: 50
          },
          {
              day: 5,
              sessionLength: 0
          },
          {
              day: 6,
              sessionLength: 0
          },
          {
              day: 7,
              sessionLength: 60
          }
      ]
 * return (
 *   <AverageSession sessionTime={sessionTime} userId={parseInt(userId)/>
 * ) 
 * @returns {JSX.Element} the session data
 **/
export default function AverageSession ({ sessionTime, userId }) 
{

  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  /**
   * Function to convert numbers into letters for days of the week.
   *
   * @param {number} dayNumber - The day number between 1 and 7
   * @returns {string} The letter corresponding to the day of the week (L, M, M, J, V, S, D).
  **/
  const day = (dayNumber) => 
  {
    return weekDays[dayNumber - 1] || "";
  };


    return (
      <div className="averageLengthTimeContainer">

        <div className="averageDuration"></div>
        <p className="sessionLengthTitle">Durée moyenne des sessions</p>

        <ResponsiveContainer>

          <LineChart 
            data={sessionTime} 
            margin={{ top: 50, right: 30, left: 20, bottom: 25 }}
          >
            <XAxis 
              dataKey="day" 
              stroke="rgba(255, 255, 255, 0.7)" 
              axisLine={false} 
              dy={25} 
              tickLine={false} 
              tickFormatter={day}
            />
            <YAxis 
              dataKey="day" 
              domain={[10, "dataMax + 70"]} 
              hide={true} 
            />
            <Line 
              dataKey={`User${userId}`} 
              type={"natural"} 
              stroke="rgba(255, 255, 255, 0.8)" 
              strokeWidth={2} 
              dot={false} 
              active 
              activeDot={{stroke: "rgba(255,255,255, 0.6)", strokeWidth: 16, r: 5,}} 
            />
            <Tooltip 
              wrapperStyle={{ outline: "none" }} 
              content={<CustomTooltip />} 
              cursor={<CustomCursor />}  
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    );
  };

  AverageSession.propTypes = 
  {
    sessionTime: PropTypes.array,
    userId: PropTypes.number,
  };

  CustomTooltip.propTypes = 
  {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  