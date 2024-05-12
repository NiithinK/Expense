import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','rgba(255, 147, 4, 1)'];
export default function PieGraph({ expenses }) {
  // Step 1: Organize expenses by category and calculate total amount spent in each category
  
  const data = expenses.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += parseFloat(curr.amount);
    } else {
      acc[curr.category] = parseFloat(curr.amount);
    }
    return acc;
  }, {});

  // Step 2: Prepare data for the PieChart component
  const chartData = Object.keys(data).map((category, index) => ({
    name: category,
    value: data[category],
    fill: COLORS[index % COLORS.length], // Assign colors from COLORS array
  }));

  return (
    <>
    <div>
     <PieChart width={1000} height={1000}>
      <Pie
        data={chartData}
        cx={350}
        cy={100}
        labelLine={false}
        label={({ name, value }) => `${name} ($${value.toFixed(2)})`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
   </div>
    </>
   
  );
}


