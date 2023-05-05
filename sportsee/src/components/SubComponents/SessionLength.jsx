import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * @description SessionLength is the chart to gather the session time
 * @param {object} session 
 * * @const {object} sessionData (sessions, userId)
 * * @const {array} sesssionLength (day, sessionLength)
 * @returns the session data
 */
export default function SessionLength (session) 
{

    const sessionData = session.data.data;
    const sessionLength = sessionData.sessions;

  /**
   * @description Converting the mocked days data into a week letter as per the chart
   */
    let days = sessionLength.map((data) => {
      switch (data.day) {
        case 1:
          return { ...data, day: "L" };
        case 2:
          return { ...data, day: "M" };
        case 3:
          return { ...data, day: "M" };
        case 4:
          return { ...data, day: "J" };
        case 5:
          return { ...data, day: "V" };
        case 6:
          return { ...data, day: "S" };
        case 7:
          return { ...data, day: "D" };
        default:
          return { ...data };
      }
    });

  /**
   * @description CustomTooltip is a custom tooltip + insert "min" as per minute for the chart
   * @param {*} param0
   * @returns the custom tooltip with the minute values
   */
    function CustomTooltip ({ payload, active }) 
    {
      if (active) 
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
          <LineChart data={days} margin={{ top: 0, right: 16, bottom: 24, left: 16 }}>
            <XAxis dataKey="day" stroke="rgba(255, 255, 255, 0.6)" axisLine={false} dy={10} tickLine={false} tick={{fontSize: 12, fontWeight: 500,}} />
            <YAxis dataKey="sessionLength" domain={[10, "dataMax + 70"]} hide={true} />
            <Line dataKey="sessionLength" type={"monotone"} stroke="rgba(255, 255, 255, 0.6)" strokeWidth={2} dot={false} active activeDot={{stroke: "rgba(255,255,255, 0.6)", strokeWidth: 16, r: 5,}} />
            <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} cursor={{strokeWidth: 0}} />
          </LineChart>
        </ResponsiveContainer>

      </div>
    );
  };
  