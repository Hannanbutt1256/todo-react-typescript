import React, { createContext, useContext, useState, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);
export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useTodoContext must be used within a TodoProvider");
  return context;
};
