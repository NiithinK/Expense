import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = ({ expenses }) => {
  // Group expenses by category and calculate total amount for each category
  const categoryData = expenses.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += curr.amount;
    } else {
      acc[curr.category] = curr.amount;
    }
    return acc;
  }, {});

  // Convert categoryData into an array of objects for BarChart
  const data = Object.keys(categoryData).map(category => ({
    category,
    amount: categoryData[category]
  }));

  return (
    <>
    <div style={{marginTop:'50px'}}>
    <BarChart
    
    width={500}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="amount" fill="#8884d8" />
  </BarChart>
    </div>
    </>
  );
};

export default BarGraph;
