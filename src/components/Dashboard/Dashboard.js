import React from "react";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="d-sm-block d-md-block d-lg-flex justify-content-between bg-gray gap-3">
      <div>
        <h2>Line Chart</h2>
        <div>
          <MyLineChart></MyLineChart>
        </div>
      </div>

      <div>
        <h2>Bar Chart</h2>
        <div>
          <MyBarChart></MyBarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
