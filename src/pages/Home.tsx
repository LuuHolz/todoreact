import { useState } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";
import { HomeUI } from "./HomeUI";

const Home = () => {
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
    <HomeUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default Home;


// const defaultTodos = [{
//   text: 'tarea 1', completed: true
// },
// {
//   text: 'tarea 2', completed: false
// },
// {
//   text: 'tarea 2', completed: true
// }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
