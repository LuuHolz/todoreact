// import IconCheck from "../assets/check.svg";
// import IconError from "../assets/error.svg";

const TodoItems = ({text, completed}: {text:string, completed:boolean}) => {
  return (
    <div className="containerTodoItem">
      <li className="liTodoItem">
                              {/* CLASES DINAMICAS */}
        <span className={`icon iconCheck ${completed && "iconCheckActive "}`}>V</span>
        <p className={`textTodoItem ${completed && "textComplete"}`}>{text}</p>
        <span className="iconDelete icon">X</span>
      </li>
    </div>
  );
};

export {TodoItems};
