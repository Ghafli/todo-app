import { format, isToday, isTomorrow, isThisWeek, isPast, parseISO } from 'date-fns';  

export const formatDate = (date) => {  
  if (!date) return null;  
  return format(new Date(date), 'yyyy-MM-dd');  
};  

export const getRelativeDateString = (dateStr) => {  
  const date = parseISO(dateStr);  
  if (isToday(date)) return 'Today';  
  if (isTomorrow(date)) return 'Tomorrow';  
  return format(date, 'MMM d');  
};  

export const getDateCategory = (dateStr) => {  
  if (!dateStr) return 'noDueDate';  
  const date = parseISO(dateStr);  

  if (isPast(date) && !isToday(date)) return 'overdue';  
  if (isToday(date)) return 'today';  
  if (isTomorrow(date)) return 'tomorrow';  
  if (isThisWeek(date)) return 'thisWeek';  
  return 'later';  
};  

export const groupTodosByCategory = (todos) => {  
  return todos.reduce((acc, todo) => {  
    const category = getDateCategory(todo.dueDate);  
    if (!acc[category]) acc[category] = [];  
    acc[category].push(todo);  
    return acc;  
  }, {});  
};  
