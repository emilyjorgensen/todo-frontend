export function TodoIndex(props) {
  console.log(props);

  return (
    <div>
      <h2>All todos!</h2>
      <div className="cards">
        {props.todos.map((todo) => (
          <div key={todo.id} className="card">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.deadline}</p>
            <p>{todo.completed}</p>
            <p>{todo.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
