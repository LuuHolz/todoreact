import { TodoCounter } from "../components/TodoCounter";
import { TodoButton } from "../components/TodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";

const Home = () => {
  const tareas= [
    { text: "tarea 1", completed: false },
    { text: "tarea 2", completed: true },
    { text: "tarea 3", completed: false }
  ];

  return (
    <div className="homeContainer">
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {tareas.map((todo) => (
          <TodoItems key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <TodoButton />
    </div>
  );
};

export default Home;
