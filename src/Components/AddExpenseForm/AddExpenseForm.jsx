import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import './AddExpenseForm.css'

const ExpenseCard = ({ addExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [total, setTotal] = useState(0); // State for total expenses

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
    const newAmount = parseFloat(amount);
    if (total + newAmount > 5000) {
      enqueueSnackbar('Your expenses cannot exceed $5000!', { variant: 'warning' });
      return;
    }
    addExpense({ title, amount: newAmount, category, date });
    // Update total
    setTotal(prevTotal => prevTotal + newAmount);
    // Clear form fields
  };

  const handleAddIncome = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    // Reset the form fields and hide the form
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
    setShowForm(false);
  };

  return (
    
    <>
    <div style={{border: '1px solid black',width: '355.41px',height: '181px',borderRadius:'10px',textAlign:'center',backgroundColor:'rgba(155, 155, 155, 1)'}}>
      <div style={{fontFamily:'ubuntu',fontSize:'30px',fontWeight:'700',lineHeight:'34.47px',textAlign:'center',color:'aliceblue'}}>
        <p>Total Expenses: ${total}</p>
      </div>
      <div >
        <button style={{width: '167.65px',height:'38px',backgroundColor:'#FF4747',borderRadius:'15px',color:'white',fontSize:'large'}} onClick={handleAddIncome}>+ Add Expense</button>
      </div>
      {showForm && (
        <div className='popup-container'>
          <div className="popup">
            <div> <h2>Add Expense</h2></div>
            <div className='popupContainer2'>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <div className='popup-buttons1'>
                <button className='popup-buttons1' onClick={handleSubmit}>Add Expense</button>
              </div>
              <div className='popup-buttons2'>
                <button className='popup-buttons2' onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ExpenseCard;
