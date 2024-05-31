import React, {ReactNode} from 'react';
import { UseLocalStorage } from '../hooks/UseLocalStorage';
import { useState } from 'react';

type Todo = {
  text: string;
  completed: boolean;
};

type Props = {
  loading: boolean;
  error: boolean;
  completedTodos: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchTodos: Todo[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
};


const TodoContex = React.createContext<Props | undefined>(undefined);

function TodoProvider({ children }: { children: ReactNode }){
    const [searchValue, setSearchValue] = useState<string>("");

    const { item: todos = [], saveItem: saveTodos, loading, error } = UseLocalStorage("TODOS_V1", []);
  
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;
    const searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  
    const completeTodo = (text: string) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text: string) => {
      const newTodos = todos.filter((todo) => todo.text !== text);
      saveTodos(newTodos);
    };
    return (
        <TodoContex.Provider value={{            
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue, 
            searchTodos,
            completeTodo,
            deleteTodo}}>
            {children}
        </TodoContex.Provider>
      );
};

export  {TodoContex, TodoProvider};