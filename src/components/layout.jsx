import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from "./componentsExports";

const Layout = () => {
  return (
    <>
      {/* Your Nav component is part of the layout, so it will always be visible */}
      <Nav />

      {/* The Outlet component is the placeholder.
        Based on the URL, React Router will render the correct page component (Home, Faqs, etc.) here.
      */}
      <main className='bg-[#99d0d7]'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
