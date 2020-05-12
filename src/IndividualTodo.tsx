import React, { Fragment, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { Todo } from "./types";
interface TodoProps extends RouteComponentProps<{ id: string }> {
  todos: Array<Todo>;
}

const IndividualTodo: React.FC<TodoProps> = ({ todos, match }) => {
  const [todoDetail, setTodoDetail] = useState(
    todos.filter((x) => x.id === parseInt(match.params.id))[0]
  );
  return (
    <Fragment>
      <span>Todo Details</span>
      <span>Name: {todoDetail.text}</span>
      <span>
        This todo is {todoDetail.complete ? "completed!" : "not completed :("}
      </span>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(IndividualTodo);
