import React from 'react';
import { Outlet } from 'react-router-dom';

const MinimalLayout = () => {
  return (
    <div className="minimal-layout px-2">
      <main className=''>
        <Outlet />
      </main>
    </div>
  );
};

export default MinimalLayout;