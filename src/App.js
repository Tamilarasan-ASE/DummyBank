import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AccountList } from './Components/AccountList';
import { CreateAccount } from './Components/CreateAccount';
import { WelcomePage } from './Pages/WelcomePage';
import Header from './Pages/Header';
import Tabs from './Pages/Tabs';
import { AccountDetails } from './Components/AccountDetails';
import './App.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('accountList');

    return (
        <Router>
            <div>
                <Header />
                <div className='content'>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/dummyBank" element={
                        <div className="tab-container">
                            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                            {activeTab === 'accountList' && <AccountList />}
                            {activeTab === 'createAccount' && <CreateAccount setActiveTab={setActiveTab} />}
                        </div>
                    } />
                    <Route path="/dummyBank/account/:id" element={<AccountDetails/>}/>
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
