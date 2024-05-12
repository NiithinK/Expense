import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";

const ExpenseList = ({ expenses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  // Logic to get the current expenses for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExpenses = expenses.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div style={{ background: 'white',marginLeft: '5rem', padding: '1rem', borderRadius: '8px',width: '738.33px',height: '345.03px',marginTop:'30px' }}>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th style={{ paddingRight: '5rem',paddingBottom: '1rem', fontSize: 'x-large' }}>Title</th>
            <th style={{ paddingRight: '5rem',paddingBottom: '1rem', fontSize: 'x-large' }}>Amount</th>
            <th style={{ paddingRight: '5rem',paddingBottom: '1rem', fontSize: 'x-large' }}>Category</th>
            <th style={{ paddingRight: '5rem',paddingBottom: '1rem',fontSize: 'x-large' }}>Date</th>
            <th style={{ fontSize: 'x-large' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.map((expense, index) => (
            <tr key={index}>
              <td style={{ paddingRight: '2rem',paddingBottom: '1rem', fontSize: 'x-large' }}>{expense.title}</td>
              <td style={{ paddingRight: '2rem',paddingBottom: '1rem', fontSize: 'x-large' }}>{expense.amount} Rs</td>
              <td style={{ paddingRight: '2rem',paddingBottom: '1rem', fontSize: 'x-large' }}>{expense.category}</td>
              <td style={{ paddingRight: '2rem',paddingBottom: '1rem',fontSize: 'x-large' }}>{expense.date}</td>
              <td style={{ fontSize: 'x-large' }}>
                <button style={{marginRight: '10PX',width:'2rem',height:'2rem' ,borderRadius:'15px'}}><CiEdit /></button>
                <button style={{width:'2rem',height:'2rem' ,borderRadius:'15px'}} ><TiDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div style={{marginTop: '40px',marginLeft:'300px',disply:'flex',alignItems:'center'}}>
        {Array.from({ length: Math.ceil(expenses.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} style={{marginRight: '5px', fontSize: 'large', padding: '5px 10px', border: '1px solid black', borderRadius: '50%', background: currentPage === index + 1 ? 'black' : 'white',color:currentPage === index + 1 ? 'white' : 'black'}}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
