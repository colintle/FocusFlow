import React, { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // You can add your sign-up logic here.
        // For simplicity, we're just printing the entered email and password.
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div>
            <div>
               Sign Up
            </div>
            <div>
                <label htmlFor="signupEmail">Email</label>
                <input
                    type="text"
                    id="signupEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label htmlFor="signupPassword">Password</label>
                <input
                    type="password"
                    id="signupPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /><br />
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
}

export default SignUp;
