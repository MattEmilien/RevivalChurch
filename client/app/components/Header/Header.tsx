import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <>
      <Navbar />
      <div className='relative h-[50vh]'>
        <Image
          src="/image_2.jpg"
          alt="Picture of the woman praying"
          layout='fill'
          objectFit='cover'
          
        />
      </div>
    </>
  );
}

export default Header;
