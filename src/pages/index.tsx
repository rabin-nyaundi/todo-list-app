import { Reducer, useReducer } from "react";
import TodoList from "@/components/todoList";
import AddTodoForm from "@/components/addTodoForm";
import { Action, State } from "../../types/types";
import { filterTasks } from "../../utils/utils";
import { initialState, todoReducer } from "../../utils/reducer";

export default function Home() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    todoReducer,
    initialState
  );

  function handleAddTodo(todoInput: string) {
    dispatch({
      type: "ADD_TODO",
      payload: todoInput,
    });
  }

  function handleCompleteTodo(id: number) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  }

  return (
    <main
      className={`prose flex min-h-screen min-w-full flex-col p-2 lg:p-24 bg-white relative `}
    >
      <div className="flex flex-col">
        <h2 className="leading-3 lg:text-4xl">To Do List</h2>
        <hr className="w-full border border-darkGray p-0 m-1" />
      </div>
      <div className="flex flex-col text-black">
        <details className="px-2">
          <summary>{filterTasks(state.todos, true).length} Done</summary>
          <TodoList
            todos={filterTasks(state.todos, true)}
            handleCompleteTodo={handleCompleteTodo}
          />
        </details>
        <hr className="w-full border border-darkGray p-0 m-1" />
      </div>
      <div className="pb-10 flex flex-col overflow-y-auto">
        <TodoList
          handleCompleteTodo={handleCompleteTodo}
          todos={filterTasks(state.todos, false)}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full lg:w-5/6 m-auto p-3 ">
        <AddTodoForm handleSubmitForm={handleAddTodo} />
      </div>
    </main>
  );
}
