import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { login } from '../utils/auth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (login(username, password)) {
            navigate('/dashboard');  // Redirect to dashboard
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login">
            <h1>
                <FaSignInAlt className="icon" /> Login
            </h1>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                {error && <p className="error">{error}</p>}
                <button type="submit">
                    <FaSignInAlt className="icon" /> Login
                </button>
            </form>
        </div>
    );
};

export default Login;
