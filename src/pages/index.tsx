import ButtonFilled from "@/components/buttonFilled";
import ButtonOutlined from "@/components/buttonOutlined";
import TodoList from "@/components/todoList";
import { filterTasks } from "../../utils/utils";
import { Reducer, useReducer } from "react";
import { todoReducer, Action, State, initialState } from "../../utils/reducer";
import AddTodoForm from "@/components/addTodoForm";

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
        <h2 className="leading-3">To Do List</h2>
        <hr className="w-full border border-darkGray" />
      </div>
      <div className="flex flex-col text-black">
        <details>
          <summary>{filterTasks(state.todos, true).length} Done</summary>
          <TodoList
            todos={filterTasks(state.todos, true)}
            handleCompleteTodo={handleCompleteTodo}
          />
        </details>
        <hr className="w-full border border-darkGray" />
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
