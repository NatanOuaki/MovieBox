import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Pagination from '../components/Pagination/Pagination'; 


function Popular() {
  const [movie, setMovie] = useState(null);
  const [movieFiltered, setMovieFiltered] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };


  function getDataMovie() {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`;
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
        setMovie(json.results);
        setMovieFiltered(json.results);
        setTotalPages(json.total_pages); 

      }) 
      .catch(err => console.error('error: ' + err));
  }

  useEffect(() => {
    getDataMovie();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  return (
    <>
        <SearchBar movie={movie} setMovieFiltered = {setMovieFiltered}/>
        <Gallery movie={movieFiltered} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </>
  );
}

export default Popular;
