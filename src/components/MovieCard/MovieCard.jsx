import { Link } from 'react-router-dom';
import './movieCard.css';

function MovieCard({movie}){
    return(
        <Link to={`/movies/${movie.id}`}>
            <div className="movieCard">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="{movie.title}"/>
                <p className="cardTitle">{movie.title}</p>
            </div>
        </Link>

    );
};

export default MovieCard;