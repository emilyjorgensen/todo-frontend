import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodoNew } from "./TodoNew";
import { TodoIndex } from "./TodoIndex";

export function Content() {
  let todos = [
    {
      id: 1,
      Title: "hello",
      description: "hello",
      deadline: "05/13/2024",
      completed: "yes",
      category_id: 3,
    },
    {
      id: 2,
      Title: "hello",
      description: "hello",
      deadline: "05/13/2024",
      completed: "yes",
      category_id: 3,
    },
    {
      id: 3,
      Title: "hello",
      description: "hello",
      deadline: "05/13/2024",
      completed: "yes",
      category_id: 3,
    },
  ];
  return (
    <main>
      <Login />
      <Signup />
      <h1>Make your to do list!</h1>
      <TodoNew />
      <TodoIndex todos={todos} />
    </main>
  );
}
