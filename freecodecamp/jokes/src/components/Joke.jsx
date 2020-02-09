import React from 'react';

function Joke(props) {
  function qAndA(question, answer) {
    if (question && answer) {
      return (
        <div>
          <div className="joke-question">
            q: {question}
          </div>
          <div className="joke-answer">
            a: {answer}
          </div>
        </div>
      );
    } else if (question) {
      return (
        <div className="joke-question">
          q: {question}
        </div>
      );
    } else {
      return (
        <div className="joke-answer">
          a: {answer}
        </div>
      );
    }
  }

  return (
    <div className="joke">
      {qAndA(props.question, props.answer)}
    </div>
  );
}

export default Joke;