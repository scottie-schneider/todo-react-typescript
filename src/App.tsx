import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./TodoList";
import IndividualTodo from "./IndividualTodo";
import AddTodoForm from "./AddTodoForm";
import { Todo, AddTodo, OnAddTodo } from "./types";
import { connect } from "react-redux";

const App: React.FC<any> = ({ initialTodos, onAddTodo, toggleTodo }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <TodoList todos={initialTodos} toggleTodo={toggleTodo} />
                <AddTodoForm
                  addTodo={addTodo}
                  onAddTodo={onAddTodo}
                  newTodo={newTodo}
                  setNewTodo={setNewTodo}
                />
              </Fragment>
            )}
          />
          <Route path="/:id" component={IndividualTodo} />
        </Switch>
      </Router>
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
    toggleTodo: (id: number) =>
      dispatch({
        type: "TOGGLE TODO",
        payload: { id },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
