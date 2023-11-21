import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodoNew } from "./TodoNew";

export function Content() {
  return (
    <main>
      <Login />
      <Signup />
      <h1>Make your to do list!</h1>
      <TodoNew />
    </main>
  );
}
