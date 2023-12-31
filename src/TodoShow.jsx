export function TodoShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTodo(props.todo.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyTodo(props.todo);
  };

  return (
    <div>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.description}</p>
      <p>{props.todo.deadline}</p>
      <p>{props.todo.completed}</p>
      <p>{props.todo.category}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input required defaultValue={props.todo.title} name="title" type="text" />
        </div>
        <div>
          Description: <input required defaultValue={props.todo.description} name="description" type="text" />
        </div>
        <div>
          Deadline: <input required defaultValue={props.todo.deadline} name="deadline" type="datetime" />
        </div>
        <div>
          Completed: <input required defaultValue={props.todo.completed} name="completed" type="text" />
        </div>
        <div>
          Category: <input required defaultValue={props.todo.category} name="category_id" type="text" />
        </div>
        <button type="submit" data-bs-dismiss="modal">
          Update todo
        </button>
      </form>
      <button onClick={handleClick} data-bs-dismiss="modal">
        Delete todo
      </button>
    </div>
  );
}
