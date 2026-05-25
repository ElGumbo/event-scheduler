import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex flex-1 flex-col'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
