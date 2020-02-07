import React from 'react';

const movieCardStyle = {
  padding: '1.0em',
  width: '320px',
}

const cardTextStyle = {
  padding: '1em'
}

const starBoxStyle = {
  padding: '1em',
  backgroundColor: 'silver',
  width: '100%'
}

// stateless component
const MovieCard = (props) => {
  return (
    <div className="MovieCard" style={movieCardStyle}>
      <div className="row">
        <img src={props.imgUrl} alt="placeholder"></img>
      </div>

      <div className="Description" style={cardTextStyle}>
        <div className="row">
          <h4>{props.title}</h4>
        </div>
        <div className="row">
          <h6>{props.subTitle}</h6>
        </div>
        <div className="row">
          {props.desc}
        </div>
      </div>

      <div className="row" style={starBoxStyle}>
        {props.star}
      </div>
    </div>
  )
}

export default MovieCard;