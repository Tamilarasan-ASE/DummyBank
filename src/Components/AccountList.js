import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export const AccountList = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/dummyBank')
            .then(response => response.json())
            .then(data => setAccounts(data));
    }, []);

    return (
        <div className='account-list'>
            <h2>Bank Accounts</h2>
            <div className="card-container">
                {accounts.map(account => (
                    <div key={account.id} className="card">
                        <h3>{account.accountHolderName}</h3>
                        <p>Account Number: {account.accountNumber}</p>
                        <p>Balance: ${account.balance.toFixed(2)}</p>
                        <Link to={`/dummyBank/account/${account.id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
