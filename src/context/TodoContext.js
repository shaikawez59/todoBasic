import React, { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "todo msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

export const TodoContextProvider = TodoContext.Provider;
export default function useTodoContext() {
  return useContext(TodoContext);
}
