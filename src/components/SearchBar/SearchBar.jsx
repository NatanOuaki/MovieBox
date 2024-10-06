import './SearchBar.css'

function SearchBar({ movie, setMovieFiltered }) {
    function handleChange(event) {
        const searchTerm = event.target.value.toLowerCase();

        const filteredMovies = movie.filter((m) => 
            m.title.toLowerCase().includes(searchTerm)
        );
        
        setMovieFiltered(filteredMovies);
    }

    return (
        <input className="searchBoxInput" type="text" placeholder="Search a movie..."  onChange={handleChange}/>
    );
}

export default SearchBar;
