// src/components/Contexts/TodoContext.js  
import { createContext, useContext, useState } from 'react';  

const TodoContext = createContext();  

export const useTodoContext = () => {  
  return useContext(TodoContext);  
};  

export const TodoProvider = ({ children }) => {  
  const [todos, setTodos] = useState([]);  

  const value = {  
    todos,  
    setTodos,  
  };  

  return (  
    <TodoContext.Provider value={value}>  
      {children}  
    </TodoContext.Provider>  
  );  
};  

export default TodoContext;  
