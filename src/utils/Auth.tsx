import React, {useEffect, useState} from 'react';
import {auth} from './firebase';
import firebase from 'firebase';

export const AuthContext = React.createContext<AuthContextClass>({currentUser: null, pending: true});

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState<firebase.User>(null);
  const [pending, setPending] = useState<boolean>(true)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
    setPending(false);
  }, []);

  return pending
      ? <div>Loading...</div>
      : <AuthContext.Provider value={{currentUser, pending}}>{children}</AuthContext.Provider>
}

class AuthContextClass {
  currentUser: firebase.User
  pending: boolean
}