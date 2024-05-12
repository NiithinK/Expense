
import React, { useState } from 'react';
import './Home.css'


function Home() {
  const [expenses, setExpenses] = useState([]);
  const [wallet, setWallet] = useState(5000); // Initial wallet balance

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setWallet(prevWallet => prevWallet - parseFloat(newExpense.amount)); // Subtract the expense amount from the wallet balance
  };

  return (
    <>
      <div className='App2'>
        <div className='App'>
        </div>
      </div>

      <div className='App3'>
      </div>
    </>
  );
}

export default Home;
