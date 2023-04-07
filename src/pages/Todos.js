import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="mx-auto p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">List of Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="border-t py-2">
            <h2 className="text-lg font-bold">{todo.title}</h2>
            {todo.completed ? (
              <p className="text-green-500">Completed</p>
            ) : (
              <p className="text-red-500">Incomplete</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
