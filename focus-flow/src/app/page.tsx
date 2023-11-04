"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logos/ffLogo_slogan.png';
import landing from "../../public/landing/landing.png";
import SignUp from '@/app/components/SignUp';
import Login from '@/app/components/Login';

export default function Home() {
  const [isLoginActive, setIsLoginActive] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
                <Image src={logo} alt="Focus Flow Logo" width={200} height={50} />
            </Link>
            <p className="text-center ml-4 cursor-pointer text-xs sm:text-sm text-gray-700 hover:text-orange-300"
              onClick={() => setIsLoginActive(!isLoginActive)}>
              {isLoginActive ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-gray-300 p-8 my-4 rounded-lg shadow-md mx-auto max-w-md w-full">
            {isLoginActive ? <Login /> : <SignUp />}
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 bg-orange-300 flex-col justify-center items-center text-white p-8">
        <div className="text-center flex flex-col items-center justify-center">
          <Image src={landing} alt="Landing Illustration" width={300} height={300} objectFit="contain" />
          <h2 className="text-5xl font-bold mb-4 text-orange-800">Welcome to the new You.</h2>
          <p className="text-xl">All your tasks in one place.</p>
        </div>
      </div>
    </div>
  );
}
