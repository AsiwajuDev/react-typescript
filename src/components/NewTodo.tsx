import React, { useRef } from "react";

import { NewTodoProps } from "../todo.model";

const NewTodo: React.FunctionComponent<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          placeholder="add new todo"
          ref={textInputRef}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
