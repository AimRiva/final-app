import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("X-MAL-CLIENT-ID", "f92a8d1d21d2961f22ba51f005dc77fd");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };
    
    fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/manga/ranking?limit=20`, requestOptions)
    .then(response => response.json())
    .then(result => setMovies(result.data))

    // eslint-disable-next-line
  }, []);

  const  handleSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("X-MAL-CLIENT-ID", "f92a8d1d21d2961f22ba51f005dc77fd");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };
    
    fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/manga?q=${text}&limit=20`, requestOptions)
    .then(response => response.json())
    .then(result => setMovies(result.data))

    setText('');
  }

  const handleChange = (e) => {setText(e.target.value)};

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <h2>Search Movie</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} value={text} />
          </form>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

          { movies.map(movie => <MovieItem key={movie.node.id} movie={movie} />) }
              
          </div>
      </div>
  </section>
  );
}

export default Movies;
