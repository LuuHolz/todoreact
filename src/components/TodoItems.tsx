
const TodoItems = ({text, completed}: {text:string, completed:boolean}) => {
  return (
    <div className="containerTodoItem">
      <li className="liTodoItem">
        <span className={`iconCheck iconCheckActive icon`}>V</span>
        <p className={`textTodoItem textComplete`}>{text}</p>
        <span className="iconDelete icon">X</span>
      </li>
    </div>
  );
};

export {TodoItems};
