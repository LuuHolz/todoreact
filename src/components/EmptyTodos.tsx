import ImageTarea from '../assets/image-tarea.svg'

const EmptyTodos = () => {
  return (
    <div className="emptyContainer">
      <img src={ImageTarea} alt="" className='imgTarea'/>
      <p className="textEmptyTodo">¡Crea tu primera tarea pendiente!</p>
    </div>
  );
};

export { EmptyTodos };
