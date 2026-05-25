import React from "react";
import { Link, useNavigate } from "react-router";
import { getToken, removeToken } from "../../utils/auth";

export default function Footer() {
  const token = getToken();
  const navigate = useNavigate();

  return (
    <footer className='p-4 bg-gray-800 text-white mt-auto'>
      <div className='container mx-auto flex flex-col justify-between items-center'>
        <div className='space-x-4'>
          <Link to='/'>
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
    </footer>
  );
}
