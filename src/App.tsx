import "./App.css";
import Addtodo from "./components/Addtodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Addtodo />
      <TodoList />
    </div>
  );
}

export default App;
