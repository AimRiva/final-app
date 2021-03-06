import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
//const imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";


  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-4">
                <img className="card-img-top" src={props.movie.image_url} alt="" />
                  
                </div>
                <div className="col-md-6">
                    {/* <div className="small mb-1">{props.movie.alternative_titles}</div> */}
                    <span className="fs-6">{props.movie.title_japanese}</span> 
            
                    <h1 className="display-5 fw-bolder">{props.movie.title}</h1>
                    <div className="fs-5 mb-5">
                    <span className="badge bg-warning text-wrap">Score : {props.movie.score}</span> <span className="badge bg-primary text-wrap"> {props.movie.status}</span> <span className="badge bg-info text-wrap">{props.movie.type}</span> 
                    </div>
                    <p className="lead fs-6">{props.movie.synopsis}</p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
   </section>
  );
}

export default MovieDetails;
