import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from "react";

function Popular() {
  const [movie, setMovie] = useState(null);

  function getDataMovie() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovie(json.results)) 
      .catch(err => console.error('error: ' + err));
  }

  useEffect(() => {
    getDataMovie();
  }, []);

  return (
    <>
        <Gallery movie={movie} />
    </>
  );
}

export default Popular;
