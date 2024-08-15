import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {
  const navigate = useNavigate(); 
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); 

  const handleClick = () => {
    navigate('/'); 
  };
  const handleLogOut = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    navigate('/'); 
  };
  const handleAdmin=()=>{
    setIsUserMenuOpen(!isUserMenuOpen);
    navigate(`/dummyBank`);
  };
  const handleUser = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    navigate('/'); 
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen); 
  };

  return (
    <header className="header">
      <div className="container">
      <button className="home-button" onClick={handleClick}>
          Home
        </button>
        <div className='logo-container'>
        <h1 className="logo" onClick={handleClick}>
          Dummy Bank
        </h1>
        <p className="subtitle">Dummy Bank for Dummy People</p>
        </div>
        <div className="user-menu">
          <button onClick={handleUserMenuToggle} className="user-menu-button">
            Switch User
          </button>
          {isUserMenuOpen && (
            <div className="user-menu-dropdown">
              <p className='drops' onClick={handleAdmin}>Admin</p>
              <p className='drops' onClick={handleUser}>User</p>
              <p className='logout' onClick={handleLogOut}>LogOut</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
