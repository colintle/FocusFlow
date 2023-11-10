import React, { FormEvent, useState } from 'react';
import { NextRequest } from 'next/server';

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    async function handleSignUp(){
        // Your sign-up logic here.
        // For simplicity, we're just printing the entered full name, email, and passwords.

        if (!fullName || !email || !password || !confirmPassword) {
            alert('Please enter all the fields to register an account.');
            return;
        }

        if (password != confirmPassword) {
            alert('The password fields do not match.');
            return;
        }

        const namePieces = fullName.split(' ');

        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        const firstName = namePieces[0];
        const lastName = namePieces[1];

        const res = await fetch('api/signup', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({email, password, firstName, lastName}),
        })

        const out = await res.json()

        if (!out.errorCode) {
            console.log(out);
            alert("Account created.");
        }
        else if(out.errorCode == "auth/weak-password") {
            alert("Your password needs to be at least 8 characters in length.");
        }
        else if(out.errorCode == "auth/email-already-in-use") {
            alert("Account with email '" + email + "' already exists. Please sign in.");
        }
        else {
            alert("Error: " + out.errorMessage);
        }
    };

    return (
        <div className="bg-white-200 p-3 rounded-md max-w-md mx-auto">
            <div className="text-xl-header text-center mb-4">Create an account</div>
            <div className="space-y-4">
                <div className="form-group">
                    <label htmlFor="signupFullName" className="form-control-label">Full Name</label>
                    <input
                        type="text"
                        placeholder='John Doe'
                        id="signupFullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-4 border rounded-md"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signupEmail" className="form-control-label">Email</label>
                    <input
                        type="text"
                        placeholder='example.email@gmail.com'
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-4 border rounded-md"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signupPassword" className="form-control-label">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter at least 8+ characters'
                        id="signupPassword"
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
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-control-label">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Enter at least 8+ characters'
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-4 border rounded-md"
                    />
                    {confirmPassword && (
                        <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute top-1/2 right-4 text-blue-500"
                        >
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div>
                <button
                    onClick={handleSignUp}
                    className="w-full bg-orange-300 text-white p-1 rounded-md hover-bg-blue-600 cursor-pointer"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignUp;
