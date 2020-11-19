import React, {useEffect, useState} from "react";
import {auth} from "./firebase";
import firebase from "firebase";
import User = firebase.User;

export const AuthContext = React.createContext<AuthContextClass>({currentUser: null});

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
}

class AuthContextClass {
  currentUser: User
}