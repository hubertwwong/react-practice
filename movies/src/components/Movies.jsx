import React from 'react';

import MovieList from './MovieList';

class Movies extends React.Component {
  render() {
    return (
      <div className="Movies container">
        <MovieList />
        <div className="footer row">
          Your fancy footer.
        </div>
      </div>
    )
  }
}

export default Movies;