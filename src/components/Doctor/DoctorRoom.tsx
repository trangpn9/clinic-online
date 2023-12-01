import React, { useLayoutEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pubnub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

import { pubnubKey } from './../../utils/constants/pubnub';
import DoctorChatBox from './DoctorChatBox';
import { useCurrentUser } from './../../hooks/useCurrentUser';

const DoctorRoom = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const userContext = useCurrentUser();


  useLayoutEffect(() => {
    const currentUser = localStorage.getItem("userName") as string;
    const userType = localStorage.getItem("userType") as string;
    console.log('currentUser: ', currentUser);
    console.log('type: ', userType);
    
    if (currentUser == null) {
      setUserName(currentUser);
      navigate("/doctor");    
    }
    if (userType != null) {
      userContext.handleSetUserType(userType);
    }
  },[]);

  const doctorClient = useMemo(() => {
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
  
  if (doctorClient) {
    return (
      <PubNubProvider client={doctorClient}>
        <DoctorChatBox />
      </PubNubProvider>
    )
  }
}

export default DoctorRoom