import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Date.now(), completed: false, text: todoText },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, updatedText) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  };

  // LocalStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos?.length) setTodos(savedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Todo App
        </h1>
        <TodoContextProvider
          value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
        >
          <TodoForm />
          <div className="mt-4 space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
