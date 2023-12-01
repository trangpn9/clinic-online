import React from 'react';
import bg from './../../assets/bg.jpeg';

function Home() {

  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <img src={bg} alt='background' className="w-full" />
      </div>
    </div>
  )
}

export default Home