export function CategoryNew() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   console.log("handle submit", params);
  //   // props.OnCreateTodo(params);
  //   event.target.reset();
  // };
  return (
    <div>
      <h2>New Category</h2>
      <form>
        {/* onSubmit={handlesubmit} */}
        <div>
          Category name: <input name="name" type="text" />
        </div>
      </form>
    </div>
  );
}
