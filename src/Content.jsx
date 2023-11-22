import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodoNew } from "./TodoNew";
import { TodoIndex } from "./TodoIndex";
import { CategoryNew } from "./CategoryNew";
import { CategoriesIndex } from "./CategoriesIndex";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { TodoShow } from "./TodoShow";

export function Content() {
  const [isTodoShowVisible, setIsTodoShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const [categories, setCategories] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState({});
  const handleCategoriesIndex = () => {
    axios.get("http://localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  const handleCreateCategory = (params) => {
    axios.post("http://localhost:3000/categories.json", params).then((response) => {
      setCategories([...categories, response.data]);
    });
  };

  const handleShowTodo = (todo) => {
    console.log("handleShowTodo", todo);
    setIsTodoShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTodoShowVisible(false);
  };

  const [todos, setTodos] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState({});
  const handleTodosIndex = () => {
    axios.get("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  const handleCreateTodo = (params) => {
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  useEffect(handleCategoriesIndex, []);
  useEffect(handleTodosIndex, []);

  return (
    <main>
      <Login />
      <Signup />
      <h1>Make your to do list!</h1>
      <TodoNew onCreateTodo={handleCreateTodo} />
      <CategoryNew onCreateCategory={handleCreateCategory} />
      <CategoriesIndex categories={categories} />
      <TodoIndex todos={todos} onShowTodo={handleShowTodo} />
      <Modal show={isTodoShowVisible} onClose={handleClose}>
        <TodoShow todo={currentTodo} />
      </Modal>
    </main>
  );
}
