import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

configure({ adapter: new Adapter() });
const initialTodos = [
  { text: "walk the dog", complete: true },
  { text: "write app", complete: false },
];
describe("<TodoList />", () => {
  it("should render a list of available todos", () => {
    const wrapper = shallow(<TodoList todos={initialTodos} />);
    expect(wrapper.find(<TodoListItem />).toHaveGreaterThanOrEqual(1));
  });
});
