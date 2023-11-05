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
                        className="w-full px-3 py-2 border rounded-full"
                    />
                </div>
                <div>
                    <label htmlFor="signupEmail">Email</label>
                    <input
                        type="text"
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-full"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="signupPassword">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="signupPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-full"
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
                        className="w-full px-3 py-2 border rounded-full"
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
                    className="w-full bg-blue-500 text-white p-2 rounded-full hover-bg-blue-600 cursor-pointer"
                >
                    Sign Up
                </button>
            </div>
            <div className="text-center mt-4">
                <p>Or sign up with:</p>
                <div className="flex justify-center space-x-4">
                    <button className="p-2 rounded-full bg-white hover-bg-gray-200">
                        <img
                            src="/google-logo.png"
                            alt="Google"
                            className="w-6 h-6"
                        />
                    </button>
                    <button className="p-2 rounded-full bg-white hover-bg-gray-200">
                        <img
                            src="/facebook-logo.png"
                            alt="Facebook"
                            className="w-6 h-6"
                        />
                    </button>
                    <button className="p-2 rounded-full bg-white hover-bg-gray-200">
                        <img
                            src="/apple-logo.png"
                            alt="Apple"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                    By signing up you agree to our terms & privacy policy.
                </p>
            </div>
        </div>
    );
}

export default SignUp;