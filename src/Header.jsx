import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> |{" "}
        <Link to="/categories">Categories</Link> | <Link to="/todos/new">New Todo</Link>
      </nav>
    </header>
  );
}
