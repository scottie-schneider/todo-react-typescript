import React, { Fragment, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Todo } from "./types";
interface TodoProps extends RouteComponentProps<{ id: string }> {
  todos: Array<Todo>;
}

const IndividualTodo: React.FC<TodoProps> = (props: TodoProps) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(props.match.params.id);
  return <Fragment>todo {id}</Fragment>;
};

export default IndividualTodo;
