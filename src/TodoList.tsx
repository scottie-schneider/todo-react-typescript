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
    <ul data-test="component-TodoList">
      {todos.map((todo) => {
        return (
          <Link
            data-test="component-TodoListItem"
            key={todo.id}
            to={`/${todo.id}`}
          >
            <TodoListItem todo={todo} toggleTodo={toggleTodo} />
          </Link>
        );
      })}
    </ul>
  );
};

export default TodoList;
