import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodoNew } from "./TodoNew";
import { TodoIndex } from "./TodoIndex";
import { CategoryNew } from "./CategoryNew";
import { CategoriesIndex } from "./CategoriesIndex";

export function Content() {
  let categories = [
    {
      id: 1,
      name: "Chores",
    },
    {
      id: 2,
      name: "Homework",
    },
    {
      id: 3,
      name: "Hobbies",
    },
  ];

  let todos = [
    {
      id: 1,
      title: "hello",
      description: "hello",
      deadline: "05/13/2024",
      completed: "yes",
      category_id: 3,
    },
    {
      id: 2,
      title: "hello",
      description: "hello",
      deadline: "05/13/2024",
      completed: "yes",
      category_id: 3,
    },
    {
      id: 3,
      title: "hello",
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
      <CategoryNew />
      <CategoriesIndex categories={categories} />
      <TodoIndex todos={todos} />
    </main>
  );
}
