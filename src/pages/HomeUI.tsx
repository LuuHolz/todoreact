import { TodoCounter } from "../components/TodoCounter";
import { TodoButton } from "../components/TodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";

type Props = {
    loading: boolean;
    error: boolean;
    completedTodos: number;
    totalTodos: number;
    searchValue: string;
    setSerchValue: string;
    searchTodos:string
    completeTodo: () => void;
    deleteTodo: () => void;
}

const HomeUI = ({loading, error, completedTodos, totalTodos, searchValue, setSerchValue, searchTodos, completeTodo, deleteTodo}: Props) => {


  return (
    <div className="homeContainer">
    <TodoCounter completed={completedTodos} total={totalTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSerchValue} />
    <TodoList>
      {loading && <TodosLoading/>}
      {error && <TodosError/>}
      {(!loading && searchTodos.length === 0) && <EmptyTodos/>}

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