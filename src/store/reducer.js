const initialState = {
  todos: [
    { text: "From redux 1", complete: true, id: 1 },
    { text: "From redux 2", complete: false, id: 2 },
  ],
};

const reducer = (state = initialState, action) => {
  if (action && action.type === "ADD TODO") {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          text: action.payload.name,
          complete: false,
          id: (state.todos.length += 1),
        },
      ],
    };
  }
  if (action && action.type === "TOGGLE TODO") {
    const newTodos = [...state.todos];
    const foundIndex = newTodos.findIndex((x) => x.id === action.payload.id);
    newTodos[foundIndex] = {
      ...newTodos[foundIndex],
      complete: !newTodos[foundIndex].complete,
    };
    return {
      ...state,
      todos: [...newTodos],
    };
  }
  return state;
};

export default reducer;
