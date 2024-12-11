import React, { useState } from 'react';    
import TodoList from './TodoList';    
import { useTodos } from './TodoProvider';  
import { PlusCircle } from 'lucide-react';    

function TodoApp() {    
  const { addTodo } = useTodos();  
  const [newTodo, setNewTodo] = useState('');  
  const [dueDate, setDueDate] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (newTodo.trim()) {  
      addTodo(newTodo, dueDate || null);  
      setNewTodo('');  
      setDueDate('');  
    }  
  };  

  return (    
    <div className="container mx-auto px-4 py-8">    
      <div className="max-w-2xl mx-auto">  
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Todo List</h1>  

        {/* Add Todo Form */}  
        <form onSubmit={handleSubmit} className="mb-8">  
          <div className="flex gap-4">  
            <input  
              type="text"  
              value={newTodo}  
              onChange={(e) => setNewTodo(e.target.value)}  
              placeholder="Add a new todo..."  
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  
            />  
            <input  
              type="date"  
              value={dueDate}  
              onChange={(e) => setDueDate(e.target.value)}  
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  
            />  
            <button  
              type="submit"  
              className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"  
            >  
              <PlusCircle size={20} />  
              Add  
            </button>  
          </div>  
        </form>  

        {/* Todo List */}  
        <TodoList />  
      </div>  
    </div>    
  );    
}    

export default TodoApp;  
