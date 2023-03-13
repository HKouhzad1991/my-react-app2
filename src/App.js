import User from "./User";
import "./App.css";
function App() {
  let users = [
    {name:'milad' , age:27 , height:180}
    {name:'hossein' , age:31 , height:180}
    {name:'kosar' , age:24 , height:169}
  ]
  return (
    <div className="row">
      <User name={users[0].name} age={users[0].age} height={users[0].height} />
      <User name="kosar" age="24" height="168" />
      <User name="mohammad" age="30" height="190" />
    </div>
  );
}

export default App;
