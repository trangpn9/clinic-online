import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from './../../hooks/useCurrentUser';

const DoctorLogin = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const userContext = useCurrentUser();

  useLayoutEffect(() => {
    const currentUser = localStorage.getItem("userName") as string;
    const currentUserType = localStorage.getItem("userType") as string;

    if (currentUser != null && currentUserType === "doctor") {
      setUserName(currentUser);
      navigate("/doctor/doctor-room");    
    }
  },[]);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("DoctorID handleSubmit!");
    localStorage.setItem("userName", userName);
    localStorage.setItem("userType", "doctor");
    userContext.handleSetUserType('doctor');
    
    navigate("/doctor/doctor-room");    
  }

  return (
    <form className="p-4 w-full" onSubmit={(e) => handleSubmit(e)}>
      <div className="mt-3">
        <label
          htmlFor="doctorID"
          className="text-sm font-bold leading-6 text-gray-900 require"
        >Doctor ID</label>
        <div
          className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-green-600"
        >
          <input
            type="text"
            name="doctorID"
            id="doctorID"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="doctorID"
            className="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:border-none focus:outline-none"
            placeholder="Doctor ID"
          />
        </div>
      </div>
      <button
        type="submit"        
        className="mt-3 py-2 px-4 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
      >
        Enter Waiting Room
      </button>
    </form>
  )
}

export default DoctorLogin