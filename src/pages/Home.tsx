import { useState } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoButton } from "../components/TodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";

const Home = () => {

  const localStorageTodos = localStorage.getItem('TODOS_1');
  let parseTodos;

  const [searchValue, setSerchValue] = useState("");
  const [todos, setTodos] = useState(parseTodos);


  //LOCALSTORAGE
  if (!localStorageTodos) {
    localStorage.getItem('TODOS_V1', JSON.stringify([]));
    parseTodos = [];
  } else {
    parseTodos = JSON.parse(localStorageTodos);
  }



  //FILTRACIONES, LONGITUDES
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((todos) =>{
    const todoText = todos.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
                     //CONVIERTO TODO EN MINUSCULA
    return todoText.includes(searchText)}
  );

  //ACTUALIZA ESTADO Y LOCALSTORAGE
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

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
    <div className="homeContainer">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSerchValue} />
      <TodoList>
        {searchTodos.map((todo) => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoButton />
    </div>
  );
};

export default Home;
