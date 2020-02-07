import React from 'react';

import MovieCard from './MovieCard';

const movieData = [
   {
     title: "movie1",
     subTitle: "movie1",
     desc: "jlkfdslkjfjlk dfsajljdfs fdsajljfdslk fdsajlfkdjls fjdsak dsfajl fdsajlk fdsajl fdsajl",
     star: "3.5"
   },
   {
    title: "movie2",
    subTitle: "movie2",
    desc: "jlkfdslkjfjlk dfsajljdfs fdsajljfdslk fdsajlfkdjls fjdsak dsfajl fdsajlk fdsajl fdsajl",
    star: "4.5"
  },
  {
    title: "movie3",
    subTitle: "movie3",
    desc: "jlkfdslkjfjlk dfsajljdfs fdsajljfdslk fdsajlfkdjls fjdsak dsfajl fdsajlk fdsajl fdsajl",
    star: "4.0"
  }
];

class MovieList extends React.Component {
  createMovieTiles = () => {
    const mo = movieData.map((m) => {
      return <MovieCard
        imgUrl="https://via.placeholder.com/320"
        title={m.title}
        subTitle={m.subTitle}
        desc={m.desc}
        star={m.star} />
    });

    return mo;
  }
  
  render() {
    return (
      <div className="MovieList row">
        {this.createMovieTiles()}
      </div>
    )
  }
}

export default MovieList;