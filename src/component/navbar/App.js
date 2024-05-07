import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="h-14 bg-transparent flex justify-between items-center">
      <div className='flex justify-center items-center font-serif'>
        <img className="h-16 px-5 py-1 rounded-2xl saturate-150 brightness-200" src="bg1 (1).png" alt="man logo" />
        <h1 className='text-orange-300 text-2xl font-extrabold font-sans'>Momento Cafe</h1>
      </div>
      <div>
        <ul className="flex justify-end items-center gap-10 text-orange-400">
          <li className="mx-4 font-semibold cursor-pointer hover:text-orange-700 hover:text-xl">Home</li>
          <li className="mx-4 font-semibold cursor-pointer hover:text-orange-700 hover:text-xl">About</li>
          <li className="mx-4 font-semibold cursor-pointer hover:text-orange-700 hover:text-xl">Catalogue</li>
          <li className="mx-4 font-semibold cursor-pointer hover:text-orange-700 hover:text-xl">Contact Us</li>
        </ul>
      </div>
      <div>
        <Link href='#' className='border-2 px-6 py-3 rounded-3xl  border-orange-400  text-orange-400 m-5 hover:bg-orange-400 hover:text-white'>Log In</Link>
        <Link href='$' className='border-2 px-6 py-3 rounded-3xl border-none  bg-orange-400 text-white m-5 hover:bg-white hover:text-orange-400 hover:border-2 hover:border-orange-400'>Sign Up</Link>
      

        
      </div>
    </nav>
  );
};

export default NavBar;

