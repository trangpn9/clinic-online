import React, { useEffect, useState } from 'react'
import { Chat, MessageInput, MessageList, UserEntity } from '@pubnub/react-chat-components';

const PatientChatBox = () => {
  const [patient, setPatient] = useState<UserEntity>({
    "name": "Patient Guest",
    "custom": {
      "title": "Patient Ha Noi"
    },
    "email": null,
    "eTag": "AZDyqJ7andTHlAE",
    "externalId": null,
    "id": "patient_guest",
    "profileUrl": "https://randomuser.me/api/portraits/women/1.jpg",
    "updated": "2020-09-23T09:23:33.598365Z"
  });

  useEffect(()=>{
    const currentUser = localStorage.getItem("userName") as string;

    setPatient(
      {
        "name": currentUser,
        "custom": {
          "title": "Patient Ha Noi"
        },
        "email": null,
        "eTag": "AZDyqJ7andTHlAE",
        "externalId": null,
        "id": currentUser,
        "profileUrl": "https://randomuser.me/api/portraits/women/1.jpg",
        "updated": "2020-09-23T09:23:33.598365Z"
      }
    );
  }, []);

  return (
    <div className="w-full h-full">
      <h2 className="text-indigo-600 text-3xl font-extrabold pb-3">
        Patient Interface
      </h2>
      <Chat currentChannel="random">
        <MessageList/>
        <MessageInput />
      </Chat>
    </div>
  )
}

export default PatientChatBox