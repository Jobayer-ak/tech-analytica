import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useChartHook from "../../hooks/useChart";
import "./MyLineChart.css";

const MyLineChart = () => {
  const [infos, setInfos] = useChartHook();

  return (
    <LineChart width={500} height={400} data={infos.data}>
      <Line dataKey={"sell"}></Line>
      <Line dataKey={"revenue"}></Line>
      <XAxis dataKey={"month"}></XAxis>
      {/* <YAxis dataKey={"investment"}></YAxis> */}
      <Tooltip></Tooltip>
      <YAxis></YAxis>
    </LineChart>
  );
};

export default MyLineChart;
