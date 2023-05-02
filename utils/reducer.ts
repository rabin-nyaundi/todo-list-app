import { Action, State, Todo } from "../types/types";
import { formatDate } from "./utils";

export const initialState: State = {
  todos: [
    {
      id: 1,
      title: "Task one",
      complete: true,
      created_at: formatDate(new Date()),
    },
    {
      id: 2,
      title: "Task two",
      complete: true,
      created_at: formatDate(new Date()),
    },
    {
      id: 3,
      title: "Task three",
      complete: false,
      created_at: formatDate(new Date()),
    },
  ],
};

export function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_TODOS":
      return { todos: action.payload };
    case "ADD_TODO":
      //   const newTodo: Todo = {
      //     id: state.todos.length + 1,
      //     title: action.payload,
      //     complete: false,
      //     created_at: formatDate(new Date()),
      //   };

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
