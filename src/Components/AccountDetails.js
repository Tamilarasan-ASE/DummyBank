import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const AccountDetails=()=> {
    const { id } = useParams();
    const [account, setAccount] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/dummyBank/${id}`)
    .then((response) => response.json())
    .then((data) => setAccount(data))
    .catch((error) => console.error('Error:', error));
    }, [id]);

    if (!account) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Details</h2>
            <p><strong>Account Holder Name:</strong> {account.accountHolderName}</p>
            <p><strong>Account Number:</strong> {account.accountNumber}</p>
            <p><strong>Balance:</strong> ${account.balance}</p>
        </div>
    );
};
