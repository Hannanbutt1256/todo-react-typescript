import React, { useState } from "react";
import { Todo } from "../common/TodoContext";
import { useTodoContext } from "../common/TodoContext";
import {
  CheckIcon,
  XMarkIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(todo.text);
    setIsEditing(false);
  };

  return (
    <div
      className={`${
        todo.completed
          ? "bg-red-400 font-mono font-bold mt-3 p-3 rounded-xl"
          : "font-mono font-bold mt-3 p-3 bg-blue-400 rounded-xl"
      }`}
    >
      <div className=" flex justify-between">
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-none outline-none rounded-full focus:ring-blue-500 focus:ring-2 mr-3"
          />

          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="pr-20 outline-none rounded-lg bg-slate-300 focus:border-2  focus:border-blue-400"
            />
          ) : (
            <span>{todo.text}</span>
          )}
        </div>
        {isEditing ? (
          <div>
            <button onClick={handleSave}>
              <CheckIcon className="w-5 h-5 " aria-hidden="true" />
            </button>
            <button onClick={handleCancel}>
              <XMarkIcon className="w-5 h-5 " aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div>
            <button onClick={handleEdit}>
              <PencilIcon className="w-5 h-5 " aria-hidden="true" />
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <TrashIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
