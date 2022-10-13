import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import "./App.css";

const students = [
  {
    name: "Stephen",
    submissions: {
      beavers: 3,
      stars: 2,
    },
  },
  {
    name: "Eduardo",
    submissions: {
      beavers: 7,
      stars: 1,
    },
  },
  {
    name: "Pepe",
    submissions: {
      beavers: 6,
      stars: 9,
    },
  },
  {
    name: "Gigachad",
    submissions: {
      beavers: 0,
      stars: 10,
    },
  },
];

function App() {
  const [data, setData] = useState(students);

  return (
    <>
      <h1>Beavers and Stars Chart</h1>
      <div className="App">
        <div className="chart">
          <BarChart
            data={data}
            width={800}
            height={700}
            margin={{
              top: 35,
              right: 15,
              left: 15,
              bottom: 35,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="submissions.beavers" fill="#ffa300" name="Beavers" />
            <Bar dataKey="submissions.stars" fill="#00bfa0" name="Stars" />
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default App;
