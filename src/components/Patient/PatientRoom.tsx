import React, { useLayoutEffect, useMemo } from 'react'
import Pubnub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import { useNavigate } from 'react-router-dom';

import { pubnubKey } from './../../utils/constants/pubnub';
import PatientChatBox from './PatientChatBox';
import { useCurrentUser } from './../../hooks/useCurrentUser';


const PatientRoom = () => {
  const navigate = useNavigate();

  const patientClient = useMemo(() => {
    let client;
    const currentUser = localStorage.getItem("userName") as string;
    if (currentUser != null) {
    client = new Pubnub({
      ...pubnubKey,
      uuid: currentUser
    });
  }
    return client;
  },[])

  const userContext = useCurrentUser();

  useLayoutEffect(()=> {
    const currentUser = localStorage.getItem("userName") as string;
    const userType = localStorage.getItem("userType") as string;
    console.log('currentUser: ', currentUser);
    console.log('type: ', userType);
    if (currentUser == null) {
      navigate("/patient");    
    }

    if (userType != null) {
      userContext.handleSetUserType(userType);
    }

    
  },[]);

  if (patientClient) {
    return (
      <PubNubProvider client={patientClient}>
        <PatientChatBox/>
      </PubNubProvider>
    )
  }
}

export default PatientRoom