import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoButton } from "../components/TodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContex } from "../context/TodoContex";

const HomeUI = () => {
  const { loading, error, searchTodos, completeTodo, deleteTodo } = React.useContext(TodoContex);

  return (
    <div className="homeContainer">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchTodos.length === 0 && <EmptyTodos />}

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

export { HomeUI };
