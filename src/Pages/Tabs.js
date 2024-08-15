import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tabs">
            <div onClick={() => setActiveTab('accountList')} className={activeTab === 'accountList' ? 'active' : ''}>
                Account List
            </div>
            <div onClick={() => setActiveTab('createAccount')} className={activeTab === 'createAccount' ? 'active' : ''}>
                Create Account
            </div>
        </div>
    );
};

export default Tabs;
