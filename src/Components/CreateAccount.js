import React, { useState } from 'react';
import './components.css';

export const CreateAccount=({setActiveTab})=> {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(0.0);
    const [gender, setGender] = useState('');
    const [accountType, setAccountType]=useState('Savings');
    const [email, setEmail]=useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [streetAddress, setStreetAddress]=useState('');
    const [city,setCity]=useState('');
    const [state, setState]=useState('');
    const [postalCode, setPostalCode]=useState('');
    const [country,setCountry]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newAccount = {
            accountHolderName,
            accountNumber,
            balance,
            gender,
            accountType,
            email,
            phoneNumber,
            streetAddress,city,state,postalCode,country
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
                    <label>Account Type:</label>
                    <select 
                        value={accountType} 
                        onChange={(e) => setAccountType(e.target.value)} 
                        required
                    >
                        <option value="Savings">Savings</option>
                        <option value="Checking">Checking</option>
                        <option value="Business">Business</option>
                        <option value="Joint">Joint</option>
                    </select>
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
                <div>
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <label>Email Address:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input 
                        type="text" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Street Address:</label>
                    <input 
                        type="text" 
                        value={streetAddress} 
                        onChange={(e) => setStreetAddress(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input 
                        type="text" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>State/Province:</label>
                    <input 
                        type="text" 
                        value={state} 
                        onChange={(e) => setState(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Postal/Zip Code:</label>
                    <input 
                        type="text" 
                        value={postalCode} 
                        onChange={(e) => setPostalCode(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Country:</label>
                    <input 
                        type="text" 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Create Account</button>
                
            </form>
        </div>
    );
};
