"use client";

import {useState} from "react";
import Image from 'next/image';
import Popup from "./Popup";
import { CiLogout } from "react-icons/ci";
import { useRouter } from 'next/navigation';

import logo from '../../../public/logos/ffLogo_slogan.png';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  async function handleLogOut(){
    const res = await fetch('api/logout', {
      method: 'GET',
      headers: {
          'Content-Type':'application/json',
      },
    })

    const out = await res.json()

    if (!out.errorCode) {
        alert("Logged out!")
        router.push("/");
        return
    }
  }

  return (
    <header className="w-full">
      <div className="flex items-center justify-between w-full mx-auto py-2">
        <div className="flex items-center">
          <Image src={logo} alt="Focus Flow Logo" width={150} height={25} />
        </div>
        
        <div className="flex items-center space-x-4">
          <CiLogout onClick={() => handleLogOut()} className="h-5 w-5 text-orange-500 hover:text-orange-800 hover:cursor-pointer"/>
        </div>
      </div>
      {isPopupOpen && (
          <Popup title="Logout" onClose={handleClose}>
            <p>Logout Information</p>
            {/* You can include any other components or HTML elements here as needed */}
          </Popup>
        )}
    </header>
  );
};

export default Header;
