import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MovieDetails from '../components/MovieDetails';


const Details = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("X-MAL-CLIENT-ID", "f92a8d1d21d2961f22ba51f005dc77fd");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };
    // hit TMDB Rest API endpoint to search for a movie
    fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/manga/${movieId}?fields=rank,mean,alternative_titles,synopsis,num_list_users,alternative_titles`, requestOptions)
    .then(response => response.json())
    .then(data => setMovie(data))
    

    // fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=13df8c0093657869b2d75e9a6b6fffd2&language=en-US`)
    // .then(response => response.json())
    // .then(data => setMovie(data));



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
