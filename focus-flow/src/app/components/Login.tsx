import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Your login logic here.
        // For simplicity, we're just printing the entered email and password.
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="bg-gray-200 p-3 rounded-md shadow-md max-w-md mx-auto">
            <div className="text-xl text-center mb-4">Welcome Back!</div>
            <div className="space-y-4">
                <div>
                    <label htmlFor="loginEmail" className="text-lg">Email</label>
                    <input
                        type="text"
                        id="loginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-2 py-1 border rounded-full"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="loginPassword" className="text-lg">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-2 py-1 border rounded-full"
                    />
                    {password && (
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-4 -translate-y-1/2 text-blue-500"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-orange-300 text-white p-1 rounded-full hover-bg-blue-600 cursor-pointer"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
