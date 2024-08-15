import React from "react";
import { useNavigate } from "react-router-dom";

export const WelcomePage=()=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/dummyBank/`);
    }
    return(
        <>
        <h1> Welcome to Dummy Bank!</h1>
        <button onClick={handleClick}>Admin</button>
        <button>User</button>
        </>
    );
};
