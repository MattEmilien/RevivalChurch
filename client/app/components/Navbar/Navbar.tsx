// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className="bg-gray-950 p-4 h-auto">
        
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex space-x-6 '>

            <Link className="text-white text-xl	font-extrabold italic font-bold text-lg font-main" href="/">
            REVIVAL MINISTRY  
            </Link>

        <div className=" space-x-[20px] font-extralight">
          <Link className="text-white hover:text-gray-500" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-500" href="/about">
            About US
          </Link>
          <Link className="text-white hover:text-gray-500" href="/about">
            Weekly Schedule
          </Link>
          <Link className="text-white hover:text-gray-500" href="/about">
            Blogs
          </Link>
          
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
