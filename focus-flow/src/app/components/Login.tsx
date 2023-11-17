"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    async function handleLogin(){
        // Your login logic here.
        // For simplicity, we're just printing the entered email and password.
        setLoading(true)

        if (!email && !password) {
            alert('Please enter your email and password.');
            setLoading(false)
            return;
        } else if (!email) {
            alert('Please enter your email.');
            setLoading(false)
            return;
        } else if (!password && email) {
            alert('Please enter your password.');
            setLoading(false)
            return;
        }

        const res = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({email, password}),
        })

        const out = await res.json()
    
        if (!out.errorCode) {
            alert("Successful Login!")
            router.push("/home");
            setLoading(false)
            return
        }
        else if (out.errorCode == 50) {
            alert("Please verify your email before logging in.");
            setLoading(false)
            return
        }
        else if (out.errorCode == "auth/too-many-requests") {
            alert("Too many log in requests. Please try again in a moment.");
            setLoading(false)
            return
        }
        else if (out.errorCode == "auth/invalid-login-credentials") {
            alert("Incorrect password.");
            setLoading(false)
            return
        }
        else {
            console.log(out.errorCode);
            alert("Error: " + out.errorMesage);
            setLoading(false)
            return
        }
    };

    function handleEnter(e:any){
        if(e.key === 'Enter'){
            handleLogin()
        }
    }

    return (
        <div className="bg-white-200 p-3 rounded-md w-5/6 mx-auto">
            <div className="text-xl font-bold leading-7 text-center mb-4">Welcome Back!</div>
            <div className="space-y-4" onKeyDown={(e) => handleEnter(e)}>
                <div className="relative min-h-[3.5em]">
                    <label htmlFor="loginEmail" className="absolute text-sm font-bold top-1 left-2.5">Email</label>
                    <input
                        type="text"
                        placeholder='example.email@gmail.com'
                        id="loginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-5 text-xs border rounded-md"
                    />
                </div>
                <div className="relative min-h-[3.5em]">
                    <label htmlFor="loginPassword" className="absolute text-sm font-bold top-1 left-2.5">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter at least 8+ characters'
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-200 w-full px-2 py-5 text-xs border rounded-md"
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
                <button
                    onClick={async () => {
                        await handleLogin();
                    }}
                    className="w-full bg-orange-300 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
                >
                    {loading ? "Loading" : "Login"}
                </button>
            </div>
        </div>
    );
}

export default Login;
