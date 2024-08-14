import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to={`/account/${account.id}`}>{account.accountHolderName}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create">Create New Account</Link>
        </div>
    );
};


