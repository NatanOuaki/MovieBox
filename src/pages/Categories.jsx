import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar/SearchBar";
import '../assets/css/category.css';


function Categories() {
  const [genres, setGenres] = useState([]);
  const [genresFiltered, setGenresFiltered] = useState([]);

  function getDataGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY_TMDB}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setGenres(json.genres); 
        setGenresFiltered(json.genres); 
      }) 
      .catch(err => {
        console.error('error: ' + err);
      });
  }

  useEffect(() => {
    getDataGenres();
  }, []);

  return (
    <>
      <div className="categories-container">
        {genresFiltered.map((genre) => (
          <Link to={`/category/${genre.id}`}>
            <h1 key={genre.id} className="category-item">{genre.name}</h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;
