const initialState = {
  todos: [
    { text: "From redux 1", complete: true },
    { text: "From redux 2", complete: false },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD TODO") {
    return {
      ...state,
      todos: [...state.todos, { text: action.payload.name, complete: true }],
    };
  }
  return state;
};

export default reducer;
