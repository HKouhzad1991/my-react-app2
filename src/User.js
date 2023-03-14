import "./User.css";
import React from "react";
// function User({name , children}) {

  // return (
  //   <div className="container">
  //     <p>name: {name}</p>
  //     {children}
  //   </div>
  // );
// }
class User extends React.Component {
  render() {
    return (
      <div className="container">
        <p>name: {this.props.name}</p>
        <p>age: { }</p>
        <p>height: { }</p>
       
      </div>
    );
  }
}
export default User;
