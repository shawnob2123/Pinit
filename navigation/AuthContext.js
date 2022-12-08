import React, {createContext, useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  


  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      loading,
      setLoading
      
    }}>
      {children}
    </AuthContext.Provider>
  )
}