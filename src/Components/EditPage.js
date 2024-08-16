import React, { useState, useEffect } from 'react';
import './components.css';
import { useNavigate, useParams } from 'react-router-dom';

export const EditPage = () => {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState('');
    const [gender, setGender] = useState('');
    const [accountType, setAccountType] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await fetch(`http://localhost:8080/dummyBank/${id}`);
                const data = await response.json();
                setAccount(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchAccount();
    }, [id]);

    useEffect(() => {
        if (account) {
            setAccountHolderName(account.accountHolderName);
            setAccountNumber(account.accountNumber);
            setBalance(account.balance);
            setGender(account.gender);
            setAccountType(account.accountType);
            setEmail(account.email);
            setPhoneNumber(account.phoneNumber);
            setStreetAddress(account.streetAddress);
            setCity(account.city);
            setState(account.state);
            setPostalCode(account.postalCode);
            setCountry(account.country);
        }
    }, [account]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedAccount = {
            accountHolderName,
            accountNumber,
            balance,
            gender,
            accountType,
            email,
            phoneNumber,
            streetAddress,
            city,
            state,
            postalCode,
            country,
        };

        try {
            const response = await fetch(`http://localhost:8080/dummyBank/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAccount),
            });

            if (response.ok) {
                navigate('/dummyBank');
            } else {
                console.error('Failed to update account');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!account) {
        return <div>Loading...</div>;
    }

    return (
        <div className='create-account'>
            <h2>Edit Bank Account</h2>
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
                <button type="submit">Save</button>
            </form>
        </div>
    );
};
