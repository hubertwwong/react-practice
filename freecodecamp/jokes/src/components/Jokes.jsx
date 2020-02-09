import React from 'react';

import Joke from './Joke';
import jokesData from '../data/jokesData';

function Jokes() {
  const jokesList = jokesData.map(i => <Joke key={i.id} question={i.question} answer={i.answer}/>);

  return (
    <div className="jokes">
      {jokesList}
    </div>
  );
}

export default Jokes;