import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    // const imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
    

    return(
    <div className="col mb-5">
        <div className="card h-100 border border-2 border-dark">
            <img className="card-img-top img-responsive" src={props.movie.node.main_picture.medium} alt={props.movie.node.title} width="200" height="350" />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.movie.node.title}</h5>
                    <p>{props.movie.node.type}</p>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.movie.node.id}`} >View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MovieItem;
