import React, { useState } from 'react';

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = () => {
        // Your sign-up logic here.
        // For simplicity, we're just printing the entered full name, email, and passwords.
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="bg-gray-200 p-3 rounded-md shadow-md max-w-md mx-auto">
            <div className="text-xl text-center mb-4">Create an Account</div>
            <div className="space-y-4">
                <div>
                    <label htmlFor="signupFullName" className="text-lg">Full Name</label>
                    <input
                        type="text"
                        id="signupFullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-2 py-1 border rounded-full"
                    />
                </div>
                <div>
                    <label htmlFor="signupEmail" className="text-lg">Email</label>
                    <input
                        type="text"
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-2 py-1 border rounded-full"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="signupPassword" className="text-lg">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="signupPassword"
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
                <div className="relative">
                    <label htmlFor="confirmPassword" className="text-lg">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-2 py-1 border rounded-full"
                    />
                    {confirmPassword && (
                        <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute top-1/2 right-4 -translate-y-1/2 text-blue-500"
                        >
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div>
                <button
                    onClick={handleSignUp}
                    className="w-full bg-blue-500 text-white p-1 rounded-full hover-bg-blue-600 cursor-pointer"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignUp;
