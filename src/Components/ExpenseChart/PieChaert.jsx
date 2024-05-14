import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
const COLORS = ['#FFBB28', '#FF8042','#0088FE', '#00C49F' ];
const PieGraph = ({ expenses }) => {
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
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          {/* Conditionally render Legend based on screen size */}
          <Legend
            align="center"
            layout={window.innerWidth > 768 ? 'horizontal' : 'vertical'}
            verticalAlign={window.innerWidth > 768 ? 'bottom' : 'middle'}
            wrapperStyle={{ paddingTop: window.innerWidth > 768 ? '10px' : '0px' }} // Adjust the padding top
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PieGraph;