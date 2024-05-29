import { useState } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";
import { HomeUI } from "./HomeUI";

const Home = (itemName, saveItem) => {
  const [searchValue, setSerchValue] = useState();
  const [todos, saveTodos] = UseLocalStorage("TODOS_V1", []);

  //FILTRACIONES, LONGITUDES
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((todos) => {
    const todoText = todos.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    //CONVIERTO TODO EN MINUSCULA
    return todoText.includes(searchText);
  });

  //EL TEXT ES MI IDENTIFICADOR UNICO, COMO LA KEY, ES LO QUE LAS DIFERENCIA
  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter((todo) => todo.text != text);
    saveTodos(newTodos);
  };

  return (
    <HomeUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSerchValue={setSerchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default Home;
