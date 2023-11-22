export function CategoryNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    props.onCreateCategory(params);
    event.target.reset();
  };
  return (
    <div>
      <h2>New Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Category name: <input name="name" type="text" />
        </div>
        <div>
          <button type="submit">Create category</button>
        </div>
      </form>
    </div>
  );
}
