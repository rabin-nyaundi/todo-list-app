export type ButtonProps = {
  disabled?: boolean;
  title: string;
};

export type TodoInput = {
  title: string;
};

export type Todo = {
  id: number;
  title: string;
  complete: boolean;
  created_at: string;
};

export type State = {
  todos: Todo[];
};

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "FETCH_TODOS"; payload: Todo[] };
