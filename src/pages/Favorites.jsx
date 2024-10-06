import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";

function Favorites() {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [error, setError] = useState(false);

  const fetchMovieDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY_TMDB}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      setError(true);
      console.error('Fetch error: ', error);
      return null; 
    }
  };

  const getFavoritesMovies = async () => {
    const keys = Object.keys(localStorage);
    const fetchPromises = keys.map(async (key) => {
      const movieData = JSON.parse(localStorage.getItem(key));
      return await fetchMovieDetails(movieData.id);
    });

    const results = await Promise.all(fetchPromises);
    setMovies(results.filter(movie => movie !== null));
    setMoviesFiltered(results.filter(movie => movie !== null));
  };

  useEffect(() => {
    getFavoritesMovies();
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        <>
          <SearchBar movie={movies} setMovieFiltered = {setMoviesFiltered}/>
          <Gallery movie={moviesFiltered} />
        </>
      ) : (
        <h1 style={{ color: 'white', textAlign: 'center' }}>There is no movie in your favorites...</h1>
      )}
    </>
  );
}

export default Favorites;
