import React from "react";
// Bring in model
import { Todo, ToggleTodo } from "./types";
// define props for the todo list
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li className="bg-green-100">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        <div className={`${todo.complete && "line-through"}`}>{todo.text}</div>
      </label>
    </li>
  );
};
