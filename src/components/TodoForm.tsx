import React, { useState } from "react";
import { TodoContex } from "../context/TodoContex";

const TodoForm = () => {
  const { setShowModal, addTodo } = React.useContext(TodoContex);

  const [newTodoValue, setNewTodoValue] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setShowModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onsubmit} action="" className="formContainer">

      <label htmlFor="" className="labelForm">
        Escribe tu nueva tarea pendiente
      </label>

      <textarea
        name=""
        id=""
        placeholder="Comprar pan"
        className="textAreaForm"
        value={newTodoValue}
        onChange={onChange}
        required
      ></textarea>

      <div className="btnsContainer">
        <button
          onClick={onCancel}
          type="button"
          className="btnTodoForm btnCancel-TodoForm"
        >
          Cancelar
        </button>
        <button type="submit" className="btnTodoForm btnAdd-TodoForm">
          Agregar
        </button>
      </div>

    </form>
  );
};

export { TodoForm };
