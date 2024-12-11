import React from 'react';    
import { AuthProvider } from './components/Contexts/AuthContext';    
import { TodoProvider } from './components/Contexts/TodoContext';  // Note: importing TodoProvider  
import AuthWrapper from './components/Auth/AuthProvider';    
import Navbar from './components/Layout/Navbar';    
import Login from './components/Auth/Login';    
import TodoApp from './components/Todo/TodoApp';    
import { useAuth } from './components/Contexts/AuthContext';    

function AppContent() {    
  const { isAuthenticated } = useAuth();    

  return (    
    <AuthWrapper>    
      <Navbar />    
      {isAuthenticated ? <TodoApp /> : <Login />}    
    </AuthWrapper>    
  );    
}    

function App() {    
  return (    
    <AuthProvider>    
      <TodoProvider>  {/* TodoProvider is here */}  
        <AppContent />  {/* Which renders TodoApp when authenticated */}  
      </TodoProvider>    
    </AuthProvider>    
  );    
}    

export default App;  
