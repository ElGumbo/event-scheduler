import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className='p-4 bg-gray-800 text-white mt-auto'>
      <div className='container mx-auto flex flex-col justify-between items-center'>
        <div className='space-x-4'>
          <Link to='/' className='text-sm text-gray-400 hover:text-white'>
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
