"use client";

import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import fbConfig from "@/config/fb.config";

export const authContext = createContext(null);
const OneContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(fbConfig, email, password);
  };

  const updateUser = (user, name) => {
    return updateProfile(user, {
      displayName: user.name,
    });
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(fbConfig, email, password);
  };

  const googlePopUp = () => {
    setLoading(true);
    return signInWithPopup(fbConfig, googleProvider);
  };
  const githubPopUp = () => {
    setLoading(true);
    return signInWithPopup(fbConfig, githubProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(fbConfig);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fbConfig, (currentUser) => {
      console.log("Auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
      return unsubscribe;
    });
  }, [fbConfig]);

  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(fbConfig, email);
  };

  const authInfo = {
    user: user,
    loading: loading,
    createUser: createUser,
    updateUser: updateUser,
    logIn: logIn,
    googlePopUp: googlePopUp,
    githubPopUp: githubPopUp,
    logOut: logOut,
    forgotPassword,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default OneContext;
