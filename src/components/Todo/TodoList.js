import React from 'react';  
import { useTodos } from './TodoProvider';  
import { Check, Trash2, Clock } from 'lucide-react';  

function TodoList() {  
  const { todos, toggleTodo, deleteTodo } = useTodos();  

  return (  
    <div className="space-y-4">  
      {todos.map((todo) => (  
        <div  
          key={todo.id}  
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow"  
        >  
          <div className="flex items-center gap-4">  
            <button  
              onClick={() => toggleTodo(todo.id)}  
              className={`p-2 rounded-full ${  
                todo.completed ? 'bg-green-100 text-green-500' : 'bg-gray-100 text-gray-500'  
              }`}  
            >  
              <Check size={20} />  
            </button>  
            <div>  
              <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>  
                {todo.text}  
              </p>  
              {todo.dueDate && (  
                <p className="text-sm text-gray-500 flex items-center gap-1">  
                  <Clock size={14} />  
                  Due: {new Date(todo.dueDate).toLocaleDateString()}  
                </p>  
              )}  
            </div>  
          </div>  
          <button  
            onClick={() => deleteTodo(todo.id)}  
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"  
          >  
            <Trash2 size={20} />  
          </button>  
        </div>  
      ))}  
      {todos.length === 0 && (  
        <div className="text-center py-8 text-gray-500">  
          No todos yet. Add one above!  
        </div>  
      )}  
    </div>  
  );  
}  

export default TodoList;  
