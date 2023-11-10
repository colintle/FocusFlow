import React, { useState } from 'react';
import { NextRequest } from 'next/server';

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = () => {

        if (!fullName || !email || !password || !confirmPassword) {
            alert('Please enter all the fields to register an account.');
            return;
        }

        const namePieces = fullName.split(' ');
        const firstName = namePieces[0];
        const lastName = namePieces[1];

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="bg-white-200 p-3 rounded-md w-5/6 mx-auto">
            <div className="text-xl font-bold leading-7 font-bold text-center mb-4">Create an account</div>
            <div className="space-y-4">
                <div className="relative min-h-[3.5em]">
                    <label htmlFor="signupFullName" className="absolute text-sm font-bold top-1 left-2.5">Full Name</label>
                    <input
                        type="text"
                        placeholder='John Doe'
                        id="signupFullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-5 text-xs border rounded-md placeholder:text-xs"
                    />
                </div>
                <div className="relative min-h-[3.5em]">
                    <label htmlFor="signupEmail" className="absolute text-sm font-bold top-1 left-2.5">Email</label>
                    <input
                        type="text"
                        placeholder='example.email@gmail.com'
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-5 text-xs border rounded-md"
                    />
                </div>
                <div className="relative min-h-[3.5em]">
                    <label htmlFor="signupPassword" className="absolute text-sm font-bold top-1 left-2.5">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter at least 8+ characters'
                        id="signupPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-5 border rounded-md text-xs"
                    />
                    {password && (
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/4 right-4 text-blue-500"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div>
                <div className="relative min-h-[3.5em]">
                    <label htmlFor="confirmPassword" className="absolute text-sm font-bold top-1 left-2.5">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Enter at least 8+ characters'
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-5 border rounded-md text-xs"
                    />
                    {confirmPassword && (
                        <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute top-1/4 right-4 text-blue-500"
                        >
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div>
                <button
                    onClick={handleSignUp}
                    className="w-full bg-orange-300 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignUp;
