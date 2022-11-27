import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
   

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {

const [user,setuser]=useState(null);
const [loading,setloading]=useState(true)

  // registation
  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  // Login
  const finduser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)

  }
  const updateuser=(userInfo)=>{
    return updateProfile(user,userInfo)
  }
  // logout
  const logout =()=>{
    setloading(true)
    return signOut(auth);
  }
  // google provider
  const providerLogIn = (Provider) => {
    setloading(true)
    return signInWithPopup(auth, Provider);
}

useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth ,currentuser=>{
  
    setuser(currentuser);
    setloading(false);
  });
  return ()=>unsubscribe();
},[])




  const authinfo = {
    createuser,
    finduser,
    logout,
    updateuser,
    loading,
    providerLogIn,
    user
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
