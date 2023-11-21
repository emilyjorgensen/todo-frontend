export function CategoriesIndex(props) {
  console.log(props);

  return (
    <div>
      <h2>All categories!</h2>
      <div className="cards">
        {props.categories.map((category) => (
          <div key={category.id} className="card">
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
