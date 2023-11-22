import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
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

  const handleUpdateTodo = (id, params) => {
    axios.patch(`http://localhost:3000/todos/${id}.json`, params).then((response) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data;
          } else {
            return todo;
          }
        })
      );
      setCurrentTodo(response.data);
      setIsTodoShowVisible(false);
    });
  };

  useEffect(handleCategoriesIndex, []);
  useEffect(handleTodosIndex, []);

  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todos/new" element={<TodoNew onCreateTodo={handleCreateTodo} />} />
        <Route path="/categories/new" element={<CategoryNew onCreateCategory={handleCreateCategory} />} />
        <Route path="/categories" element={<CategoriesIndex categories={categories} />} />
        <Route path="/" element={<TodoIndex todos={todos} onShowTodo={handleShowTodo} />} />
      </Routes>
      <Modal show={isTodoShowVisible} onClose={handleClose}>
        <TodoShow todo={currentTodo} onUpdateTodo={handleUpdateTodo} />
      </Modal>
    </main>
  );
}
