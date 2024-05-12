import React, { useState } from 'react';
import WalletBalance from '../Components/Mainpage/AddWallet';
import './Home.css'
import AddExpenseForm from '../Components/AddExpenseForm/AddExpenseForm'

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
          <AddExpenseForm expenses={expenses} />
          
         
        </div>
      </div>

      <div className='Home3'>
       
      </div>
    </>
  );
}

export default Home;
