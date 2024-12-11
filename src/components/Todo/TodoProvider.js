import React, { useState, useEffect } from 'react';  
import { getStoredTodos, setStoredTodos } from '../utils/localStorage';  

export function useTodos() {  
  const [todos, setTodos] = useState(() => getStoredTodos());  

  useEffect(() => {  
    setStoredTodos(todos);  
  }, [todos]);  

  const addTodo = (text, dueDate = null) => {  
    setTodos(prevTodos => [  
      ...prevTodos,  
      {  
        id: Date.now(),  
        text,  
        completed: false,  
        dueDate,  
        createdAt: new Date().toISOString()  
      }  
    ]);  
  };  

  const toggleTodo = (id) => {  
    setTodos(prevTodos =>  
      prevTodos.map(todo =>  
        todo.id === id ? { ...todo, completed: !todo.completed } : todo  
      )  
    );  
  };  

  const deleteTodo = (id) => {  
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));  
  };  

  return {  
    todos,  
    addTodo,  
    toggleTodo,  
    deleteTodo  
  };  
}  
