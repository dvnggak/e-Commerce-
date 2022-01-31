import React, { useState } from 'react';
import { useDispatch } from "react-redux"

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} ></button>
        </div>
    );
};
