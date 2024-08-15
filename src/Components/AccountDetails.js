import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './components.css';

export const AccountDetails=()=> {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/dummyBank`);
    };

    useEffect(() => {
        fetch(`http://localhost:8080/dummyBank/${id}`)
    .then((response) => response.json())
    .then((data) => setAccount(data))
    .catch((error) => console.error('Error:', error));
    }, [id]);

    if (!account) {
        return <div>Loading...</div>;
    };
    
    return (
        <div className='account-details'>
            <h2>Account Details</h2>
            <p><strong>Account Holder Name:</strong> {account.accountHolderName}</p>
            <p><strong>Account Number:</strong> {account.accountNumber}</p>
            <p><strong>Balance:</strong> ${account.balance}</p>
            <button onClick={handleClick}>Back</button>
        </div>
    );
};
