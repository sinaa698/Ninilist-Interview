import { MovieType } from "../../utils/types";
import "./movies.css";

const Movies = ({ movies }: { movies: Array<MovieType> }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie">
          <span className="movie__title">{movie.title}</span>
          <span className="movie__genre">{movie.genre.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Movies;
