import React from "react";
import { TodoContex } from "../context/TodoContex";

const TodoSearch = () => {

  const {searchValue, setSearchValue} = React.useContext(TodoContex);

  return (
    <div className="todoSearchContainer">
      <input
        type="text"
        className="todoSearch"
        placeholder="Agrega una tarea pendiente"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export { TodoSearch };
