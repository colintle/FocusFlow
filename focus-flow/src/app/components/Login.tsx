import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Your login logic here.
        // For simplicity, we're just printing the entered email and password.

        if (!email && !password) {
            alert('Please enter your email and password.');
            return;
        }
        else if (!email) {
            alert('Please enter your email.');
            return;
        }
        else if (!password && email) {
            alert('Please enter your password.');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="bg-white-200 p-3 rounded-md max-w-md mx-auto">
            <div className="text-xl-header text-center mb-4">Welcome Back!</div>
            <div className="space-y-4">
                <div className="form-group">
                    <label htmlFor="loginEmail" className="form-control-label">Email</label>
                    <input
                        type="text"
                        placeholder='example.email@gmail.com'
                        id="loginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-4 border rounded-md"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="loginPassword" className="form-control-label">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter at least 8+ characters'
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-4 border rounded-md"
                    />
                    {password && (
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-4 text-blue-500"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-orange-300 text-white p-1 rounded-md hover-bg-blue-600 cursor-pointer"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
