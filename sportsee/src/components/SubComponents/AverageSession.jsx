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
          <span>min</span>
        </p>
      </div>
    );
  };
  return null;
};

/**
 * Create a custom cursor
 * @param {array} points - the current position of the cursor coordinate x and y
 * @param {number} width - the width of the graph
 * @returns CustomCursor returns a cursor in the shape of a rectangle in the background
 */
const CustomCursor = ({ points, width }) => {
  const { x } = points[0]
  return (
    <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />
  )
}

/**
 * @description SessionLength is the chart to gather the session time
 * @param {object} data - The data of the user sessions over a week
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
 *   <AverageSession sessions={sessions} />
 * ) 
 * @returns {JSX.Element} the session data
 */
export default function AverageSession ({ data }) 
{

  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  /**
   * @description Conversion of number data into days over a week
   */
  const sessionTime = data.sessions.map((session, index) => ({
    day: weekDays[index],
    sessionLength: session.sessionLength,
  }));


    return (
      <div className="averageLengthTimeContainer">

        <div className="averageDuration"></div>
        <p className="sessionLengthTitle">Durée moyenne des sessions</p>

        <ResponsiveContainer>

          <LineChart 
            data={sessionTime} 
            margin={{ top: 0, right: 16, bottom: 24, left: 16 }}
          >
            <XAxis 
              dataKey="day" 
              stroke="rgba(255, 255, 255, 0.6)" 
              axisLine={false} 
              dy={10} 
              tickLine={false} 
              tick={{fontSize: 12, fontWeight: 500,}} 
            />
            <YAxis 
              dataKey="sessionLength" 
              domain={[10, "dataMax + 70"]} 
              hide={true} 
            />
            <Line 
              dataKey="sessionLength" 
              type={"monotone"} 
              stroke="rgba(255, 255, 255, 0.6)" 
              strokeWidth={2} dot={false} 
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
    data: PropTypes.object,
  };

  CustomTooltip.propTypes = 
  {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  