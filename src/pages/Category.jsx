import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SearchBar from "../components/SearchBar/SearchBar";

function Category() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [movieFiltered, setMovieFiltered] = useState(null);


  function getDataMovie() {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setMovie(json.results);
        setMovieFiltered(json.results);
      }) 
      .catch(err => console.error('error: ' + err));
  }

  useEffect(() => {
    getDataMovie();
  }, []);

  return (
    <>
        <SearchBar movie={movie} setMovieFiltered = {setMovieFiltered}/>
        <Gallery movie={movieFiltered} />
    </>
  );
}

export default Category;
