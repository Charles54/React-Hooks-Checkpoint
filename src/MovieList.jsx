import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-4" key={movie.id}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              posterURL={movie.posterURL}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
