import React from "react";
import LineChart from "@bit/recharts.recharts.line-chart";
import XAxis from "@bit/recharts.recharts.x-axis";
import YAxis from "@bit/recharts.recharts.y-axis";
import CartesianGrid from "@bit/recharts.recharts.cartesian-grid";
import Line from "@bit/recharts.recharts.line";
import Tooltip from "@bit/recharts.recharts.tooltip";
import Legend from "@bit/recharts.recharts.legend";
import Papa from "papaparse";
import { CSVReader } from "react-papaparse";

const Linechart = () => {
  const results = readString("/assets/csv/calcium.csv");
  console.log(results);

  return <div>hi</div>;
  //   Papa.parse("assets/csv/calcium.csv", {
  //     complete: function (results) {
  //       <LineChart
  //         width={600}
  //         height={500}
  //         data={results.data}
  //         margin={{
  //           top: 5,
  //           right: 30,
  //           left: 20,
  //           bottom: 5,
  //         }}
  //       >
  //         <CartesianGrid strokeDasharray="3 3" />
  //         <XAxis dataKey="name" />
  //         <YAxis />
  //         <Tooltip />
  //         <Legend />
  //         <Line
  //           type="monotone"
  //           dataKey="cal"
  //           stroke="#82ca9d"
  //           strokeDasharray="3 4 5 2"
  //         />
  //       </LineChart>;
  //     },
  //   });
};

export default Linechart;
