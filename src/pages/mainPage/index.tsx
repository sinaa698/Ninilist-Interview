import debounce from "lodash.debounce";
import { useCallback, useEffect, useMemo, useState } from "react";
import Movies from "../../components/movies/index";
import SearchBox from "../../components/searchBox/index";
import { getMoviesByQuery } from "../../services/movieService";
import { MovieType } from "../../utils/types";
import "./mainPage.css";

const MainPage = () => {
  const [movies, setMovies] = useState<Array<MovieType>>([]);

  const onSearchBoxChange = useCallback(async (searchInput: string) => {
    if (searchInput.length === 0) setMovies([]);

    if (searchInput.length < 3) return;

    const fetchedMovies = await getMoviesByQuery(searchInput);
    setMovies(fetchedMovies.data);
  }, []);

  const debouncedResults = useMemo(() => {
    return debounce(onSearchBoxChange, 800);
  }, [onSearchBoxChange]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <div className="search-bar">
      <SearchBox onChange={debouncedResults} />
      <Movies movies={movies} />
    </div>
  );
};

export default MainPage;
