import React, { useState } from 'react';

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = () => {
        // You can add your sign-up logic here.
        // For simplicity, we're just printing the entered full name, email, and passwords.
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="bg-gray-200 p-4 rounded-md shadow-md max-w-md mx-auto">
            <div className="text-2xl text-center mb-4">Create an Account</div>
            <div className="space-y-4">
                <div>
                    <label htmlFor="signupFullName">Full Name</label>
                    <input
                        type="text"
                        id="signupFullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="signupEmail">Email</label>
                    <input
                        type="text"
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="signupPassword">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="signupPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
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
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
                >
                    Sign Up
                </button>
                <p className="text-gray-600 text-sm text-center">
                    By signing up you agree to our terms & privacy policy.
                </p>
            </div>
        </div>
    );
}

export default SignUp;
