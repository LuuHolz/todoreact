import { TodoProvider } from "../context/TodoContex";
import { HomeUI } from "./HomeUI";

const Home = () => {


  return (
    <TodoProvider>
        <HomeUI/>
    </TodoProvider>

  );
};

export default Home;

