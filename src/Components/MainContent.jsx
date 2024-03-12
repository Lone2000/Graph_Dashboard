import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { LineChart, Line } from "recharts";

import jsonData from "../assets/csvjson.json";

function MainContent({ country }) {
  const raw_data = jsonData;
  const five_data_points = jsonData.slice(0, 4);

  // Filter jsonData by country name (Prop.country)
  const filtered_data = raw_data.filter(
    (raw_data) => raw_data.Country == country
  );
  console.log(filtered_data);

  return (
    <>
      <BarChart width={600} height={300} data={filtered_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="City served" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Passengers-2021" fill="#8884d8" />
      </BarChart>

      <LineChart
        width={600}
        height={450}
        data={filtered_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 5" />
        <XAxis dataKey="Airport" tick={{ fontSize: 15 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Passengers-2022"
          stroke="#8884d8"
          activeDot={{ r: 7 }}
        />
        <Line type="monotone" dataKey="Passengers-2021" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

export default MainContent;
