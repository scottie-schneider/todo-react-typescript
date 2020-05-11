const initialState = {
  todos: [
    { text: "From redux 1", complete: true },
    { text: "From redux 2", complete: false },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
