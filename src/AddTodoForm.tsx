import React, { useState, ChangeEvent, FormEvent } from "react";

import { AddTodo, OnAddTodo, SetNewTodo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
  onAddTodo: OnAddTodo;
  setNewTodo: SetNewTodo;
  newTodo: string;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({
  addTodo,
  onAddTodo,
  setNewTodo,
  newTodo,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // addTodo(newTodo);
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
