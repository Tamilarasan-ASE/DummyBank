import React, { useState } from 'react';
import './components.css';

export const CreateAccount=({setActiveTab})=> {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(0.0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newAccount = {
            accountHolderName,
            accountNumber,
            balance,
        };

        try {
            const response = await fetch('http://localhost:8080/dummyBank', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAccount),
            });
            

            if (response.ok) {
                setActiveTab('accountList');
            } else {
                console.error('Failed to create account');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
   

    return (
        <div className='create-account'>
            <h2>Create New Bank Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Account Number:</label>
                    <input
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Initial Balance:</label>
                    <input
                        type="number"
                        value={balance}
                        onChange={(e) => setBalance(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Create Account</button>
                
            </form>
        </div>
    );
};
