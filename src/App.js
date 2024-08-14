import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AccountList} from './Components/AccountList';
import {CreateAccount} from './Components/CreateAccount';
import {AccountDetails} from './Components/AccountDetails';

const App=()=> {
  return (
    <Router>
          <div>
              <h1>Dummy Banfk!</h1>
              <Routes>
                <Route path="/" element={<AccountList/>} />
                <Route path="/create" element={<CreateAccount/>} />
                <Route path="/account/:id" element={<AccountDetails/>}/>
              </Routes>
          </div>
    </Router>
  );
}

export default App;
