import React from "react";

const TodoForm = () => {
  return (
    <form action="" className="formContainer">
      <label htmlFor="" className="labelForm">Escribe tu nueva tarea pendiente</label>
      <textarea name="" id="" placeholder="Comprar pan" className="textAreaForm"></textarea>
      <div className="btnsContainer">
        <button className="btnTodoForm btnCancel-TodoForm">Cancelar</button>
        <button className="btnTodoForm btnAdd-TodoForm">Agregar</button>
      </div>
    </form>
  );
};

export { TodoForm };
