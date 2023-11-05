import Image from 'next/image';
import { FiUser } from "react-icons/fi"

import logo from '../../../public/logos/ffLogo_slogan.png';

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-2">
        <div className="flex items-center">
          <Image src={logo} alt="Focus Flow Logo" width={150} height={25} />
        </div>
        
        <div className="flex items-center space-x-4">
            <FiUser className="h-5 w-5 text-orange-500 hover:text-orange-800 hover:cursor-pointer"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
