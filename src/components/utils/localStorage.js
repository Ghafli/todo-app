export const getStoredUser = () => {  
  const user = localStorage.getItem('user');  
  return user ? JSON.parse(user) : null;  
};  

export const setStoredUser = (user) => {  
  localStorage.setItem('user', JSON.stringify(user));  
};  

export const removeStoredUser = () => {  
  localStorage.removeItem('user');  
};  

export const getStoredTodos = () => {  
  const todos = localStorage.getItem('todos');  
  return todos ? JSON.parse(todos) : [];  
};  

export const setStoredTodos = (todos) => {  
  localStorage.setItem('todos', JSON.stringify(todos));  
};  
