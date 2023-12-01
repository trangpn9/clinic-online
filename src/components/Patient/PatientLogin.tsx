import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from './../../store/hooks';
import { changeUser } from './../../reducers/userSlice';
import { useCurrentUser } from './../../hooks/useCurrentUser';


const PatientLogin = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const userContext = useCurrentUser();

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const currentUser = localStorage.getItem("userName") as string;
    const currentUserType = localStorage.getItem("userType") as string;

    if (currentUser != null && currentUserType === "patient") {
      setUserName(currentUser);
      navigate("/patient/patient-room");    
    }
  },[]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("userName", userName);
    localStorage.setItem("userType", "patient");
    userContext.handleSetUserType('patient');


    dispatch(changeUser(userName));
    navigate("/patient/patient-room");
  }

  return (
    <form className="p-4 w-full" onSubmit={(e) => handleSubmit(e)}>
      <div className="">
        <label
          htmlFor="username"
          className="block text-sm font-bold leading-6 text-gray-900 require"
        >Please fill in your name to proceed</label
        >
        <div className="">
          <div
            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-green-600"
          >
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:border-none focus:outline-none"
              placeholder="Your Name"
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <label
          htmlFor="about"
          className="block text-sm font-bold leading-6 text-gray-900"
        >Reason for visit
        </label>
        <div className="">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-1 focus:ring-inset focus:ring-green-600 focus:border-none focus:outline-none"
            placeholder="Your reason for visit"
          ></textarea>
        </div>
      </div>
      <div className="mt-3">
        <label
          htmlFor="vseeID"
          className="text-sm font-bold leading-6 text-gray-900 require"
        >Patient ID</label
        >
        <div
          className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-green-600"
        >
          <input
            type="text"
            name="vseeID"
            id="vseeID"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="vseeID"
            className="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:border-none focus:outline-none"
            placeholder="Your Name"
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

export default PatientLogin