import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import '../assets/css/movies.css';
import heart from '../assets/img/heart.svg';
import fullHeart from '../assets/img/fullHeart.svg';

const Movies = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      setError(true);
      console.error('Fetch error: ', error);
    }
  };

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      localStorage.setItem(movie.id, JSON.stringify({ id: movie.id, title: movie.title }));
    } else {
      localStorage.removeItem(movie.id);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    const favoriteMovie = localStorage.getItem(id);
    if (favoriteMovie) {
      setIsFavorite(true);
    }
  }, [id]);

  if (error) {
    return <ErrorPage />;
  }

  if (!movie) {
    return <></>;
  }

  return (
    <div className="movieDetails">
      <div className='leftSideContent'>
        <div className='leftSideTitle'>
          <h1>{movie.title}</h1>
          <img 
            src={isFavorite ? fullHeart : heart} 
            alt="Heart Icon" 
            className="heart" 
            onClick={handleHeartClick} 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='leftSideSub'>
          <h4>{movie.genres.map(genre => genre.name).join(', ')}</h4>
          <h4><span className='redColor'>Release Date: </span>{movie.release_date}</h4>
        </div>
        <p><strong><span className='redColor'>Rating:</span></strong> {movie.vote_average} / 10</p>
        <p>{movie.overview}</p>
      </div>
      <div className='rightSideContent'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
    </div>
  );
};

export default Movies;
