import React, { Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Todo, ToggleTodo, AddTodo } from "./types";
import { connect } from "react-redux";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "write app", complete: false },
];

const App: React.FC<any> = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    initialTodos: state.todos,
  };
};

export default connect(mapStateToProps)(App);
