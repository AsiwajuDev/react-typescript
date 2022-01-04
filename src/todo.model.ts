export interface Todo {
  id: string;
  text: string;
}

export interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

export interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
