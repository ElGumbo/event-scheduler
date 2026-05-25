import React from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { getToken, removeToken } from "../../utils/auth";

export default function Navbar() {
  const token = getToken();
  const navigate = useNavigate();

  return (
    <nav className='p-4 bg-gray-800 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='hover:underline'>
          <span className='text-xl font-bold'>Event Scheduler</span>
        </Link>
        <div className='space-x-4'>
          <Link to='/' className='hover:underline'>
            Home
          </Link>
          {!token && (
            <>
              <Link to='/sign-up' className='hover:underline'>
                Sign up
              </Link>
              <Link to='/sign-in' className='hover:underline'>
                Sign in
              </Link>
            </>
          )}
          {token && (
            <>
              <Link to='/create-event' className='hover:underline'>
                Create Event
              </Link>
              <button
                onClick={() => {
                  removeToken();
                  navigate("/");
                }}
                className='hover:underline'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
