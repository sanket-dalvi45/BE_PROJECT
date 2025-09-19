// import React from "react";
import Title from "./Title";
import Progress from "./Progress";
import './Card.css';

function Card({image, title, description }) {
  return (
    <div className="Card">
        <img 
        src={image} 
        alt={title} 
        className="card-image"
      />
      <Title text={title} />
      <Progress description={description} />
    </div>
  );
}

export default Card;
