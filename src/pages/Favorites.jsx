function Favorites() {
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2M4Nzc4MWEzOTM4NDUzODZjMDYxYWZjZjMxN2ExZSIsIm5iZiI6MTcyNjA1ODI4MC40MDExODMsInN1YiI6IjY2ZTE4ZDViNjk2MThkYTZjMDVmMDA5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hebfCBv_DD_XRnev-bgHXNeXdVEVtCVEJC0p6JPkuLY'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));


  return (
    <>
    </>
  );
}

export default Favorites;
