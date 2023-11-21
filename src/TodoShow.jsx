export function TodoShow(props) {
  return (
    <div>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.description}</p>
      <p>{props.todo.deadline}</p>
      <p>{props.todo.completed}</p>
      <p>{props.todo.category}</p>
    </div>
  );
}
