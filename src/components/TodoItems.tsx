import { BsCheckLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

type Props = {
  text: string;
  completed: boolean;
  onCompleted: () => void;
  onDelete: () => void;
}

const TodoItems = ({text, completed, onCompleted, onDelete}: Props) => {
  return (
    <div className="containerTodoItem">
      <li className="liTodoItem">
                              {/* CLASES DINAMICAS */}
        <span onClick={onCompleted} className={`icon iconCheck ${completed && "iconCheckActive "}`}><BsCheckLg /></span>
        <p className={`textTodoItem ${completed && "textComplete"}`}>{text}</p>
        <span onClick={onDelete} className="icon iconDelete"><BsXLg /></span>
      </li>
    </div>
  );
};

export {TodoItems};
