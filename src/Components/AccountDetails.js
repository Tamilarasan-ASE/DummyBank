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
    const handleEdit=()=>{
        navigate(`/dummyBank/edit/${id}`);
    };
    const handleDelete=async ()=>{
        try {
            const response = await fetch(`http://localhost:8080/dummyBank/${id}`, {
                method: 'DELETE',
            });
            

            if (response.ok) {
                navigate('/dummyBank');
            } else {
                console.error('Failed to create account');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
            <p><strong>Account Type:</strong> {account.accountType}</p>
            <p><strong>Account Number:</strong> {account.accountNumber}</p>
            <p><strong>Balance:</strong> ${account.balance}</p>
            <p><strong>Gender:</strong> {account.gender}</p>
            <p><strong>Email:</strong> {account.email}</p>
            <p><strong>Phone Number:</strong> {account.phoneNumber}</p>
            <h2>Personal Address</h2>
            <p><strong>Street Address:</strong> {account.streetAddress}</p>
            <p><strong>City:</strong> {account.city}</p>
            <p><strong>State:</strong> {account.state}</p>
            <p><strong>PostalCode:</strong> {account.postalCode}</p>
            <p><strong>Country:</strong> {account.country}</p>
            
            <button onClick={handleClick}>Back</button>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    );
};
