import React from "react";
import { useTodoContext } from "../common/TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      <ul className="w-screen">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
