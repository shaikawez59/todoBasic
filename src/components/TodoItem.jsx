import { useState } from "react";
import useTodoContext from "../context/TodoContext";

function TodoItem({ todo }) {
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();

  const editTodo = () => {
    updateTodo(todo.id, updatedText);
    setIsEditable(false);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="w-4 h-4 accent-indigo-500"
      />

      <input
        type="text"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        readOnly={!isEditable}
        disabled={todo.completed}
        className={`flex-1 px-2 py-1 bg-transparent border-b focus:outline-none ${
          todo.completed
            ? "line-through text-gray-400"
            : isEditable
            ? "border-indigo-400"
            : "border-transparent"
        }`}
      />

      <button
        onClick={() => (isEditable ? editTodo() : setIsEditable(true))}
        disabled={todo.completed}
        className={`px-3 py-1 text-sm rounded-lg ${
          isEditable
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-yellow-400 text-white hover:bg-yellow-500"
        } disabled:opacity-50`}
      >
        {isEditable ? "Save" : "Edit"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
