import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [filteredAccounts, setFilteredAccounts] = useState([]);
    const [filterCriteria, setFilterCriteria] = useState('accountNumber');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/dummyBank')
            .then(response => response.json())
            .then(data => {
                setAccounts(data);
                setFilteredAccounts(data);
            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            setFilteredAccounts(accounts.filter(account => {
                if (filterCriteria === 'accountNumber') {
                    return account.accountNumber.includes(searchTerm);
                } else if (filterCriteria === 'accountHolderName') {
                    return account.accountHolderName.toLowerCase().includes(searchTerm.toLowerCase());
                }
                return false;
            }));
        } else {
            setFilteredAccounts(accounts);
        }
    }, [searchTerm, filterCriteria, accounts]);

    return (
        <div className='account-list'>
            <div className="header-container">
                <h2>Account Lists</h2>
                <div className="filter-container">
                    <select 
                        value={filterCriteria}
                        onChange={(e) => setFilterCriteria(e.target.value)}
                    >
                        <option value="accountNumber">Account Number</option>
                        <option value="accountHolderName">Account Holder Name</option>
                    </select>
                    <input 
                        type="text" 
                        placeholder={`Search by ${filterCriteria === 'accountNumber' ? 'Account Number' : 'Account Holder Name'}`} 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="card-container">
                {filteredAccounts.map(account => (
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
