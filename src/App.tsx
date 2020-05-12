import React, { Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Todo, ToggleTodo, AddTodo, OnAddTodo } from "./types";
import { connect } from "react-redux";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "write app", complete: false },
];

const App: React.FC<any> = ({ initialTodos, onAddTodo }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");
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
      <TodoList todos={initialTodos} toggleTodo={toggleTodo} />
      <AddTodoForm
        addTodo={addTodo}
        onAddTodo={onAddTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    initialTodos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddTodo: (newTodo: string) =>
      dispatch({
        type: "ADD TODO",
        payload: { name: newTodo },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
