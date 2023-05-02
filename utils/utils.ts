import { Todo } from "./reducer";

export function formatDate(date: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const suffix = getSuffix(day);
  const year = date.getFullYear();

  return `${months[date.getMonth()]}, ${day}${suffix}, ${year}`;
}

function getSuffix(day: number) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
}

export function filterTasks(todos: Todo[], status: boolean) {
  return todos.filter((todo: any) => todo.complete === status);
}
