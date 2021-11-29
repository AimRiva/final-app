import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MovieDetails from '../components/MovieDetails';


const Details = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    
    fetch(`https://cors-anywhere.herokuapp.com/api.jikan.moe/v3/manga/${movieId}`)
    .then(response => response.json())
    .then(data => setMovie(data))

    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <MovieDetails movie={movie} />
      <Footer />
    </>
  );
}

export default Details;
