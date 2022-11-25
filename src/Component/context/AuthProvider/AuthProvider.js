import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {



  // registation
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const finduser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authinfo = {
    createuser,
    finduser,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
