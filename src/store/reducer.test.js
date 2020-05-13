import reducer from "./reducer";
const initialState = {
  todos: [
    { text: "From redux 1", complete: true, id: 1 },
    { text: "From redux 2", complete: false, id: 2 },
  ],
};

const updatedState1 = {
  todos: [
    { text: "From redux 1", complete: true, id: 1 },
    { text: "From redux 2", complete: false, id: 2 },
    {
      text: "added todo",
      complete: false,
      id: 3,
    },
  ],
};
const updatedState2 = {
  todos: [
    { text: "From redux 1", complete: true, id: 1 },
    { text: "From redux 2", complete: false, id: 2 },
    {
      text: "added todo",
      complete: true,
      id: 3,
    },
  ],
};
const addTodo = {
  text: "added todo",
  complete: true,
  id: 3,
};
const toggledTodo = {
  text: "added todo",
  complete: false,
  id: 3,
};

test("returns default initial state when no action is passed", () => {
  const newState = reducer();
  expect(newState).toEqual(initialState);
});

test("returns initial state plus a new task ADD TODO action is passed", () => {
  const newState = reducer(initialState, {
    type: "ADD TODO",
    payload: { name: "added todo" },
  });
  expect(newState).toEqual(updatedState1);
});

test("returns updated state with the correct todo toggled when a TOGGLE TODO action is passed", () => {
  const newState = reducer(updatedState1, {
    type: "TOGGLE TODO",
    payload: { id: 3 },
  });
  expect(newState).toEqual(updatedState2);
});
