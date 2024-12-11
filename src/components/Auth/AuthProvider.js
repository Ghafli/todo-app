import React from 'react';  
import { useAuth } from '../Contexts/AuthContext';  

function AuthProvider({ children }) {  
  const { isAuthenticated } = useAuth();  

  return (  
    <div className="min-h-screen bg-gray-100">  
      {children}  
    </div>  
  );  
}  

export default AuthProvider;  
