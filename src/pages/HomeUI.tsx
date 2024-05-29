import { TodoCounter } from "../components/TodoCounter";
import { TodoButton } from "../components/TodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";

type Props = {
    completedTodos: number;
    totalTodos: number;
    searchValue: string;
    setSerchValue: string;
    searchTodos:string
    completeTodo: () => void;
    deleteTodo: () => void;
}

const HomeUI = ({completedTodos, totalTodos, searchValue, setSerchValue, searchTodos, completeTodo, deleteTodo}: Props) => {


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
  )
}

export {HomeUI}