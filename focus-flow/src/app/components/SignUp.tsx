import React, { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = () => {
        // You can add your sign-up logic here.
        // For simplicity, we're just printing the entered email and passwords.
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div>
            <div>
                Sign Up Information
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
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="signupPassword"
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div style={{ position: 'relative' }}>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPassword && (
                        <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                    )}
                </div><br />
                <button onClick={handleSignUp}>Create Account</button>
            </div>
        </div>
    );
}

export default SignUp;
