import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img-top"
           src="https://via.placeholder.com/400x250.png"
           alt="blahsdflkj" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
};

export default Card;