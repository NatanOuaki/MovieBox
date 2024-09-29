import { Link } from 'react-router-dom';
import './movieCard.css';
import heart from '../../assets/img/heart.svg';
import fullHeart from '../../assets/img/fullHeart.svg';
import { useState, useEffect } from 'react';

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleHeartClick = () => {
        setIsFavorite(!isFavorite);
        
        if (!isFavorite) {
            localStorage.setItem(movie.id, JSON.stringify({ id: movie.id, title: movie.title }));
        } else {
            localStorage.removeItem(movie.id);
        }
    };

useEffect(() => {
    const favoriteMovie = localStorage.getItem(movie.id);
    if (favoriteMovie) {
        setIsFavorite(true);
    }
}, [movie.id]);

    return (
        <Link to={`/movies/${movie.id}`}>
            <div className="movieCard">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <p className="cardTitle">{movie.title}</p>
                <img 
                    src={isFavorite ? fullHeart : heart} 
                    alt="Heart Icon" 
                    className="heartIcon" 
                    onClick={handleHeartClick} 
                />
            </div>
        </Link>
    );
}

export default MovieCard;
