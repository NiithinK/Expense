// App.js

import React, { useState } from 'react';
import AddExpenseForm from '../Components/AddExpenseForm/AddExpenseForm';
import ExpenseList from '../Components/ExpenseList/ExpenseList';
import WalletBalance from '../Components/Mainpage/AddWallet';
import ExpenseChart from '../Components/ExpenseChart/ExpenseChart'
import './Home.css'
import BarChart from '../Components/BarGraph/BarGraph'

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [wallet, setWallet] = useState(5000); // Initial wallet balance

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setWallet(prevWallet => prevWallet - parseFloat(newExpense.amount)); // Subtract the expense amount from the wallet balance
  };

  return (
    <>
      <div className='Home2'>
       
        <div className='Home'>
        
          <WalletBalance wallet={wallet} />
           <AddExpenseForm addExpense={addExpense} />
          <ExpenseChart expenses={expenses} /> 
         
        </div>
      </div>

      <div className='Home3'>
        <ExpenseList expenses={expenses} />
        <BarChart expenses={expenses} />
      </div>
    </>
  );
}

export default Home;
