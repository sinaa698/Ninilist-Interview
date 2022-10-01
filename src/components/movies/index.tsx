import { Link } from "react-router-dom";
import { MovieType } from "../../utils/types";
import "./movies.css";

const Movies = ({ movies }: { movies: Array<MovieType> }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Link className="movie-link" key={movie._id} to="#">
          <div className="movie">
            <span className="movie__title">{movie.title}</span>
            <span className="movie__genre">{movie.genre.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;
