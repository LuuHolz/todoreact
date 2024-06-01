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
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  addTodo: (value: string) => void;
};


const TodoContex = React.createContext<Props | undefined>(undefined);

function TodoProvider({ children }: { children: ReactNode }){


    const [searchValue, setSearchValue] = useState<string>("");
    const { item: todos = [], saveItem: saveTodos, loading, error } = UseLocalStorage("TODOS_V1", []);
    const [showModal, setShowModal] = useState(false);
  
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    //BUSQUEDA DE TAREA EN INPUT
    const searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

    //CREAR TAREA
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      })
      saveTodos(newTodos);
    }

    //TACHAR TAREA COMPLETA
    const completeTodo = (text: string) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    };
  
    //ELIMINAR TAREA
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
            deleteTodo,
            showModal,
            setShowModal,
            addTodo}}>
            {children}
        </TodoContex.Provider>
      );
};

export  {TodoContex, TodoProvider};