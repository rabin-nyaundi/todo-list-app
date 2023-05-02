import React from "react";
import { Todo } from "../../types/types";

function TodoItem({
  todo,
  handleCompleteTodo,
}: {
  todo: Todo;
  handleCompleteTodo: Function;
}) {
  const { complete, created_at, title } = todo;

  return (
    <div
      onClick={() => handleCompleteTodo(todo.id)}
      className="flex items-center gap-4 cursor-pointer"
    >
      <div
        className={`${
          complete ? "bg-lightBlue" : "bg-white"
        } border border-gray flex justify-center items-center h-6 w-6 rounded-full`}
      >
        {complete && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="white"
          >
            <path
              id="Icon_Check_Default"
              data-name="Icon/Check/Default"
              d="M4.051,10.127,0,6.2,2.371,3.9l1.68,1.628L9.631.127,12,2.424Zm0,0"
              transform="translate(0 -0.127)"
            />
          </svg>
        )}
      </div>
      <li className="flex flex-col list-none">
        <span
          className={`${
            complete ? "line-through" : ""
          } flex flex-col list-none`}
        >
          {title}
        </span>
        <span className="text-xs">{created_at}</span>
      </li>
    </div>
  );
}

export default TodoItem;
