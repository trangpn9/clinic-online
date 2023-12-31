import React from 'react';
import { Outlet } from 'react-router-dom';

function Doctor() {
  return (
    <div className="h-128">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Doctor