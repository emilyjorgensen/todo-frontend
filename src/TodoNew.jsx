export function TodoNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    // props.OnCreateTodo(params);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Deadline: <input name="deadline" type="date" />
        </div>
        <div>
          Completed: <input name="completed" type="checkbox" />
        </div>
        <div>
          Category id: <input name="category_id" type="text" />
        </div>
        <div>
          <button type="submit">Done</button>
        </div>
      </form>
    </div>
  );
}
