import Button from "./Button";
import "./Card.css";

function Card({ shoeName, shoePic = "./images/notfound.png" }) {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img" src={shoePic} />
        <div className="card-body">
          <h5 className="card-title">{shoeName}</h5>
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

Card.defaultProps = {
  showPic :'./image/notfound.png'
}

export default Card;
