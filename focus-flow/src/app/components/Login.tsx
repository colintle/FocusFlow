import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // You can add your login logic here.
        // For simplicity, we're just printing the entered email and password.
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <div>
               Welcome Back
            </div>
            <div>
                <label htmlFor="loginName">Email</label>
                <input
                    type="text"
                    id="loginName"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label htmlFor="loginPassword">Password</label>
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {password && (
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                            style={{
                                position: 'absolute',
                                right: '5px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                padding: '0',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div><br />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
