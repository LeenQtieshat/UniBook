// authContext.js

import React, { createContext, useContext, useState } from "react";

// Create context for authentication
export const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the entire application
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in the user
  const authLogin = (userData) => {
    setUser(userData);
  };

  // Function to log out the user
  const authLogout = () => {
    setUser(null);
  };

  // Check if the user is authenticated
  const isAuthenticated =  !!user
  

  // Value object to be provided to the context consumers
  const value = {
    user,
    authLogin,
    authLogout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
