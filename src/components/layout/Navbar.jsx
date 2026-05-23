import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className='p-4 bg-gray-800 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-xl font-bold'>MyApp</span>
        <div className='space-x-4'>
          <Link to='/' className='hover:underline'>
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
