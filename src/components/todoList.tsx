import { Todo } from "../../types/types";
import TodoItem from "./todoItem";

function TodoList({
  todos,
  handleCompleteTodo,
}: {
  todos: Todo[];
  handleCompleteTodo: Function;
}) {
  return (
    <ul className="list-inside">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
