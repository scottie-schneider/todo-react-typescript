export type Todo = {
  text: string;
  complete: boolean;
  id: number;
};

export type AddTodo = (newTodo: string) => void;
export type OnAddTodo = (newTodo: string) => void;
export type SetNewTodo = (newTodo: string) => void;
export type ToggleTodo = (todoId: number) => void;
