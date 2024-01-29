import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import Papa from "papaparse";
// import Data from "../../data/dataset.csv";
// import Data1 from "../../data/data.csv";
import Data from "../../data/dataset.json";

async function fetchData() {
  const response = await fetch("../../data/dataset.csv");
  console.log(response, "response");
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);
  console.log(csv, "csv");
  const results = Papa.parse(csv, { header: true, dynamicTyping: true });
  console.log(results.data, "hello");
  return results.data;
}

function parseCSVData() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getData() {
      const parsedData = await fetchData();
      setRows(parsedData);
    }
    getData();
  }, []);

  return rows;
}

const GraphComponent = () => {
  const [downSampledData, setDownSampledData] = useState([]);

  const downSampleData = (data, threshold) => {
    const groupedData = data.reduce((groups, entry) => {
      const year = new Date(entry.Timestamp).getFullYear();
      if (!groups[year]) {
        groups[year] = { totalProfit: 0, count: 0 };
      }
      groups[year].totalProfit += parseFloat(entry["Profit Percentage"]);
      groups[year].count += 1;
      return groups;
    }, {});
    // console.log(groupedData, "groupedData");
    // console.log(Object.keys(groupedData));
    const downSampled = Object.keys(groupedData).map((group) => ({
      Timestamp: group,
      "Profit Percentage":
        (groupedData[group].totalProfit / groupedData[group].count).toFixed(2) +
        "%",
    }));

    const step = Math.ceil(downSampled.length / threshold);
    const downSampledResult = [];
    for (let i = 0; i < downSampled.length; i += step) {
      downSampledResult.push(downSampled[i]);
    }

    return downSampledResult;
  };

  useEffect(() => {
    // Function to perform downsampling
    const downSamplingThreshold = 1000;

    const downSampledDataset = downSampleData(Data, downSamplingThreshold);
    const processedData = downSampledDataset.map((item) => ({
      ...item,
      "Profit Percentage": parseFloat(
        item["Profit Percentage"].replace("%", "")
      ),
    }));

    setDownSampledData(processedData);
  }, [Data]);
  // console.log(downSampledData);

  return (
    // <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={downSampledData} width={570} height={160}>
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="rgba(37, 205, 37, 0.4)" />
          <stop offset="95%" stopColor="rgba(37, 205, 37, 0)" />
        </linearGradient>
      </defs>
      <XAxis dataKey="Timestamp" tickMargin={15} />
      <YAxis tickMargin={15} />
      <CartesianGrid stroke="#eee" strokeWidth={1} />
      <Line
        type="monotone"
        dataKey="Profit Percentage"
        stroke="#25CD25"
        strokeDasharray="3 3"
        // dot={{ strokeWidth: 2, r: 3 }}
        activeDot={{ r: 8 }}
      />
      <Area
        type="monotone"
        dataKey="Profit Percentage"
        fill="url(#areaGradient)"
        fillOpacity={0.7}
      />
      <Tooltip />
    </AreaChart>
    // </ResponsiveContainer>
  );
};

export default GraphComponent;
