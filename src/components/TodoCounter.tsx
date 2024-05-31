import React from "react";
import { TodoContex } from "../context/TodoContex";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContex);

  return (
    <div>
      {totalTodos || completedTodos >= 1 ? (
        <h1 className="textCounter">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOs
        </h1>
      ) : (
        <p className="textCounter">No hay tareas que completar</p>
      )}
    </div>
  );
};

export { TodoCounter };
