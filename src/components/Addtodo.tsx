import { useState } from "react";
import { useTodoContext } from "../common/TodoContext";

const Addtodo: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents form submission
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="font-mono font-bold w-screen">
      <div>
        <h1 className="text-center text-3xl mt-10">Todo App</h1>
        <form className="flex flex-col justify-center items-center">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Task"
            className="w-80 border-2 border-blue-300 hover:border-green-400 outline-none focus:border-orange-400 rounded-lg py-2 px-4 my-3"
          />
          <button
            type="submit"
            onClick={handleAdd}
            className="w-28 p-2 bg-blue-300 rounded-lg hover:text-white hover:bg-blue-500"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addtodo;
