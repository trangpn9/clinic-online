import React, { useEffect, useState } from 'react';
import { usePubNub } from "pubnub-react";
import { useUser, useUsers, MemberList, UserEntity, Chat, MessageList, MessageInput } from '@pubnub/react-chat-components';

const DoctorChatBox = () => {
  const [doctor, setDoctor] = useState<UserEntity>({
    "name": "Guest",
    "custom": {
      "title": "Office Assistant"
    },
    "email": null,
    "eTag": "AYGyoY3gre71eA",
    "externalId": null,
    "id": "Guest",
    "profileUrl": "https://randomuser.me/api/portraits/men/1.jpg",
    "updated": "2020-09-23T09:23:34.598494Z"
  });
  const pubnub = usePubNub();
  const uuid = pubnub.getUUID();
  const [currentUser] = useUser({ uuid });

  const [allUsers] = useUsers({ include: { customFields: true } });

  useEffect(() => {
    const currentUser = localStorage.getItem("userName") as string;

    console.log("List User: ", allUsers);
    console.log("currentUser: ", currentUser);
    setDoctor(
      {
        "name": currentUser,
        "custom": {
          "title": "Doctor Ha Noi"
        },
        "email": null,
        "eTag": "AYGyoY3gre71eA",
        "externalId": null,
        "id": currentUser,
        "profileUrl": "https://randomuser.me/api/portraits/men/1.jpg",
        "updated": "2020-09-23T09:23:34.598494Z"
      }
    );
  }, []);

  return (
    <div className="w-full h-full">
      <h2 className="text-indigo-600 text-3xl font-extrabold pb-3">
        Doctor Interface
      </h2>
      <div className="grid grid-cols-3 gap-4 h-full">
        <Chat currentChannel="random">
          <div>
            <MemberList members={[doctor]}/>
          </div>
          <div className='col-span-2'>
            <MessageList/>
            <MessageInput />
          </div>
        </Chat>
      </div>
    </div>

  )
}

export default DoctorChatBox