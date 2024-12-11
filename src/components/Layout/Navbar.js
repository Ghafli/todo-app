import React from 'react';  
import { useAuth } from '../Contexts/AuthContext';  
import { useTodoContext } from '../Contexts/TodoContext';  

function Navbar() {  
  const { isAuthenticated, user, logout } = useAuth();  
  const { todos } = useTodoContext();  
  const incompleteTodos = todos.filter(todo => !todo.completed).length;  

  return (  
    <nav className="bg-white shadow-lg">  
      <div className="container mx-auto px-4">  
        <div className="flex justify-between items-center h-16">  
          <div className="flex items-center">  
            <h1 className="text-xl font-bold text-gray-800">Todo App</h1>  
            {isAuthenticated && (  
              <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">  
                {incompleteTodos} tasks remaining  
              </span>  
            )}  
          </div>  
          {isAuthenticated && (  
            <div className="flex items-center gap-4">  
              <span className="text-gray-600">Welcome, {user?.email}</span>  
              <button  
                onClick={logout}  
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"  
              >  
                Logout  
              </button>  
            </div>  
          )}  
        </div>  
      </div>  
    </nav>  
  );  
}  

export default Navbar;  
