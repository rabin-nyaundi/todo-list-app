import { Action, State, Todo } from "../types/types";

export function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_TODOS":
      return { todos: action.payload };
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };

    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id == action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };

    default:
      return state;
  }
}
