import React from 'react';  
import { getRelativeDateString } from '../utils/dateUtils';  

function TodoItem({ todo, onToggle, onDelete }) {  
  return (  
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">  
      <input  
        type="checkbox"  
        checked={todo.completed}  
        onChange={() => onToggle(todo.id)}  
        className="h-5 w-5"  
      />  
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>  
        {todo.text}  
      </span>  
      {todo.dueDate && (  
        <span className="text-sm text-gray-600">  
          {getRelativeDateString(todo.dueDate)}  
        </span>  
      )}  
      <button  
        onClick={() => onDelete(todo.id)}  
        className="text-red-500 hover:text-red-600"  
      >  
        Delete  
      </button>  
    </div>  
  );  
}  

export default TodoItem;  
