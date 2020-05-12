import React from "react";
import { Link } from "react-router-dom";
import { TodoListItem } from "./TodoListItem";
import { Todo, ToggleTodo } from "./types";
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Link to={`/${todo.id}`}>
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          </Link>
        );
      })}
    </ul>
  );
};

export default TodoList;
