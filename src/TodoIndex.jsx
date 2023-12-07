export function TodoIndex(props) {
  console.log(props);

  return (
    <div>
      <h1>All of my todos!</h1>
      <p>Get this stuff done today</p>
      <div className="cards">
        {props.todos.map((todo) => (
          <div key={todo.id} className="card">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.deadline}</p>
            <p>{todo.completed}</p>
            <p>{todo.category}</p>
            <div>
              <button onClick={() => props.onShowTodo(todo)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
