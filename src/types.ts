export type Todo = {
  text: string;
  complete: boolean;
};
export type ToggleTodo = (selectedTodo: Todo) => void;
export type AddTodo = (newTodo: string) => void;
export type OnAddTodo = (newTodo: string) => void;
export type SetNewTodo = (newTodo: string) => void;
