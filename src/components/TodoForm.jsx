import { useState } from "react";
import useTodoContext from "../context/TodoContext";

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
