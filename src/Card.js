import Button from "./Button";
import "./Card.css";
import React from "react"   ;
// function Card() {
//   return (
//     <div className="col">
//       <div className="card">
//         <img src="./images/01.png" alt="" />
//         <div className="card-body">
//           <h5 className="card-title">shoe1</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <Button />
//         </div>
//       </div>
//     </div>
//   );
// }

class Card extends React.Component{
    render(){
        return (
    <div className="col">
      <div className="card">
        <img src="./images/01.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">shoe1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
    }
}

export default Card;
