import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * @description SessionLength is the line chart to gather the session time
 * @param {array} data - data for the line chart
 * @returns {JSX.Element} the session data
 */
export default function SessionLength ({ data }) 
{

    /**
     * @description Creation of a custom tooltip for the daily activity chart
     * @param {number | string} param0
     * @returns {JSX.Element} the converted the denominations and values (kg and kCal) in a custom tooltip
     */ 
    function CustomTooltip ({ payload, active }) 
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
    }
  
    return (
      <div className="averageLengthTimeContainer">

        <div className="averageDuration"></div>
        <p className="sessionLengthTitle">Durée moyenne des sessions</p>

        <ResponsiveContainer>

          <LineChart 
            data={data} 
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
              cursor={{strokeWidth: 0}} 
            />
          </LineChart>

        </ResponsiveContainer>

      </div>

    );
  };

  SessionLength.propTypes = 
  {
    data: PropTypes.arrayOf
    (
      PropTypes.shape
      ({
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ),
  };
  