import React from "react";
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom';

function MovieCard({movies}) {
    return ( 
        <div>
            <Link to={`/description/${movies.id}`}>
        <div className="moviecard">
<div className="movie">
    <img className="poster" src={movies.posterUrl} alt=" "/>
    
        <div className="descreption">
            <div className="box">
                <h4 className="title" style={{width:"160px", textAlign:"center",}}>{movies.title}</h4>
            </div>
        {/* <div >
            <h5 className="overview">{movies.description}</h5>
        </div> */}
        <Rating name="read-only" value={movies.rating} readOnly max={10} />
        <button className="Button">Watch Trailer</button>
    </div>
</div>
        </div>
        </Link>
        </div>
     );
}

export default MovieCard;

