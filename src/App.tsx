import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import { Todo } from "./todo.model";

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <>
      <div className="App">
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
        <NewTodo onAddTodo={todoAddHandler} />
      </div>
    </>
  );
};

export default App;
