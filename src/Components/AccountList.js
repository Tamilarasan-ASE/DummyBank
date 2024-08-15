import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export const AccountList=()=> {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/dummyBank')
            .then(response => response.json())
            .then(data => setAccounts(data));
    }, []);


    
    

    return (
        <div>
            <h2>Bank Accounts</h2>
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>
                        <Link to={`/dummyBank/account/${account.id}`}>{account.accountHolderName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


