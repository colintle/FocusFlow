"use client";

import {useState} from "react";
import Image from 'next/image';
import { FiUser } from "react-icons/fi"
import Popup from "./Popup";

import logo from '../../../public/logos/ffLogo_slogan.png';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="w-full">
      <div className="flex items-center justify-between w-full mx-auto py-2">
        <div className="flex items-center">
          <Image src={logo} alt="Focus Flow Logo" width={150} height={25} />
        </div>
        
        <div className="flex items-center space-x-4">
            <FiUser onClick={() => setIsPopupOpen(true)} className="h-5 w-5 text-orange-500 hover:text-orange-800 hover:cursor-pointer"/>
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
