import React, {createContext, useState} from 'react';

export interface IUserContext {
  type: string;
  handleSetUserType: (type: string) => void
}

const UserContext = createContext<IUserContext | null>(null);

const UserProvider: React.FC<React.ReactNode | any> = ({children}) => {
  const [type, setType] = useState('guest');

  const handleSetUserType = (typeVal: string) => {
    setType(typeVal);
  }

  const value = {
    type,
    handleSetUserType
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider};