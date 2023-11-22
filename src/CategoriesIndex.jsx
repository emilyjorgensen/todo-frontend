/* eslint-disable react/prop-types */
export function CategoriesIndex(props) {
  console.log(props);

  return (
    <div>
      <h1>All categories!</h1>
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
