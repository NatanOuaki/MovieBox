import './gallery.css';
import MovieCard from '../MovieCard/MovieCard';

function Gallery({ movie }) {
  if (!movie) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="gallery">
      {movie.map((movieItem) => (
        <MovieCard key={movieItem.id} movie={movieItem} />
      ))}
    </div>
  );
}

export default Gallery;
