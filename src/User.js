import "./User.css";
function User({ name, age, height }) {
  return (
    <div className="container">
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>height: {height}</p>
    </div>
  );
}

export default User;
