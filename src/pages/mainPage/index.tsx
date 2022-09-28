import { useEffect, useState } from "react";
import Movies from "../../components/movies/index";
import SearchBox from "../../components/searchBox/index";
import { getMovies } from "../../services/fakeMovieService";
import { MovieType } from "../../utils/types";
import "./mainPage.css";

const MainPage = () => {
  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setMovies(getMovies);
  }, []);

  const onSearchHandle = (searchInput: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(searchInput.target.value);
  };

  return (
    <div className="main-page">
      <SearchBox onChange={onSearchHandle} value={searchQuery} />
      <Movies movies={movies} />
    </div>
  );
};

export default MainPage;
