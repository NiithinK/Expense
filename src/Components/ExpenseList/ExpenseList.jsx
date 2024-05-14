import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import './ExpenseList.css'
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
    <div className="expense-list-container">
      <h2>Transaction List</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.title}</td>
              <td>{expense.amount} Rs</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button><CiEdit /></button>
                <button><TiDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(expenses.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
