import React, { createContext, useContext, useState } from 'react';  
import { getStoredUser, setStoredUser, removeStoredUser } from '../utils/localStorage';  

const AuthContext = createContext();  

export function AuthProvider({ children }) {  
  const [user, setUser] = useState(() => getStoredUser());  

  const login = async ({ email, password }) => {  
    const mockUser = { email, id: Date.now() };  
    setUser(mockUser);  
    setStoredUser(mockUser);  
  };  

  const logout = () => {  
    setUser(null);  
    removeStoredUser();  
  };  

  const value = {  
    user,  
    isAuthenticated: !!user,  
    login,  
    logout  
  };  

  return (  
    <AuthContext.Provider value={value}>  
      {children}  
    </AuthContext.Provider>  
  );  
}  

export const useAuth = () => {  
  const context = useContext(AuthContext);  
  if (!context) {  
    throw new Error('useAuth must be used within an AuthProvider');  
  }  
  return context;  
};  
