import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Mother",
      description: "Description 1",
      posterURL: "https://occ-0-33-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa1qgvT86BZyGbckkIWre5UIfUlhfUqAkInPd5E_2Fsp5BJMA_clpJM7FstyHaHpxNRjr2x9kjllYtBb8Jj87zFd0P8R3HFQoA3cbU6itOHGe9pnKjbaqvromRh-1vLvVZe5vQ.jpg?r=b32",
      rating: 8.5,
    },
    {
      title: "Nobody",
      description: "Description 2",
      posterURL: "https://variety.com/wp-content/uploads/2021/03/Bob-Odenkirk-Nobody-Film-Review.jpg",
      rating: 7.8,
    },
    // Add more movies here...
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleFilterTitle = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleFilterRating = (event) => {
    setFilterRating(event.target.value);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "New Description",
      posterURL: "https://example.com/poster3.jpg",
      rating: 9.0,
    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === "" || movie.rating >= filterRating)
  );

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleFilterTitle={handleFilterTitle}
        handleFilterRating={handleFilterRating}
        handleAddMovie={handleAddMovie}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
