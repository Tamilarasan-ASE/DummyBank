import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AccountList} from './Components/AccountList';
import {CreateAccount} from './Components/CreateAccount';
import {AccountDetails} from './Components/AccountDetails';
import {WelcomePage} from './Pages/WelcomePage';
import Header from './Pages/Header';
import './App.css';

const App=()=> {
  return (
    <Router>
          <div>
            <Header/>
            <div className='content'>
              <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/dummyBank/" element={<AccountList/>} />
                <Route path="/dummyBank/create" element={<CreateAccount/>} />
                <Route path="/dummyBank/account/:id" element={<AccountDetails/>}/>
              </Routes>
              </div>
          </div>
    </Router>
  );
}

export default App;
