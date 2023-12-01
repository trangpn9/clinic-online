import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {useCurrentUser} from './../hooks/useCurrentUser'

export function Layout({ title }: { title: string }) {


  const userContext = useCurrentUser();

  useEffect(() => {
    console.log('Type user: ', userContext.type);    
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Clinic Online</span>
          <span className="block text-indigo-600">
            Start to talk with doctor!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/" relative="path" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Home
            </Link>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a> */}
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="/doctor" relative="path" className={userContext.type === "patient" ? "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-300 cursor-not-allowed pointer-events-none" : "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800"}>
              Doctor
            </Link>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more test
            </a> */}
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="/patient" relative="path" className={userContext.type === "doctor"? "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-300 cursor-not-allowed pointer-events-none" : "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800"}>
              Patient
            </Link>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a> */}
          </div>
        </div>
      </div>

      <Outlet/>

    </div>
  );
}

export default Layout;
