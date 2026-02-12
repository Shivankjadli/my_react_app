import {useState ,  useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'https://www.omdbapi.com?apikey=769a229b';

const movie1=
    {
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}



const App = () => {
  const [movies , setMovies] = useState([]);
  const [SearchTerm , setSearchTerm ] = useState('');
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Shivank--HUB</h1>
      
      <div className="search">

        <input
        placeholder='Search your fav movie' 
        value= {SearchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(SearchTerm)}
        />
           
      </div>
      {
        movies?.length > 0
             ? ( 
             <div className='container'>
            {movies.map((movie) => (<MovieCard movie = {movie}/> ))}
            </div> ) : (
           <div className='empty'>
             <h2>No movie found</h2>
           </div> 
           )}
    </div>
  );
}

export default App;
