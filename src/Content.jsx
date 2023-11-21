import { Signup } from "./Signup";
import { TodoNew } from "./TodoNew";

export function Content() {
  return (
    <main>
      <Signup />
      <h1>Make your to do list!</h1>
      <TodoNew />
    </main>
  );
}
