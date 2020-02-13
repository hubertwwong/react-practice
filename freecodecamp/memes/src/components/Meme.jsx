import React from 'react';

function Meme (props) {
  return (
    <div className="meme">
      <h3 className="meme-top-text">{props.topText}</h3>
      <img src={props.randomImg} alt="meme-image"/>
      <h3 className="meme-bottom-text">{props.bottomText}</h3>
    </div>
  )
}

export default Meme;