// AddWallet.jsx

import React, { useState } from 'react';
import './AddWallet.css';

export default function AddWallet({ wallet }) {
  const [showPopup, setShowPopup] = useState(false);
  const [addBalance, setAddBalance] = useState(0);

  const handleAddIncome = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
    setAddBalance(0);
  };

  const handleSubmit = () => {
    setShowPopup(false);
    setAddBalance(0);
  };

  return (
    <>
   
     <div className='expense'>
       <div className='wallet'>
         <p>Wallet Balance: ${wallet}</p>
       </div>
       <div className='balanceButton'>
         <button onClick={handleAddIncome}>+ Add Income</button>
       </div>
       {showPopup && (
       <div className="popup-container">
           <div className="popup">
             <div> <h2>Add to Balance</h2></div>
            <div className='popupContainer1'>
               <input
                type="number"
                 placeholder="Amount"
                 value={addBalance}
                 onChange={(e) => setAddBalance(e.target.value)}
               />
               <div className='popup-buttons1'>
                 <button className='popup-buttons1' onClick={handleSubmit}>Add Balance</button>
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
}
