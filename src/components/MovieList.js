import React, { Component } from "react";
import "../components/App.css";
import {Link} from "react-router-dom"
import MovieCard from './MovieCard'

class MovieList extends Component {
 
  render() {
    return (
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="newlist-homepage">
            More Movie List
              <Link to={"/moremovielist"}>
                  see more
                  <svg width="24" height="24" viewBox="0 0 24 24" 
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.75">
                          <path d="M2 12L21 12" stroke="#fff"></path>
                          <path d="M14 5L21 12L14 19" stroke="#fff"></path>
                      </g>
                  </svg>
              </Link>
          </div>
        </div>
        {this.props.movies.slice(0,8).map((movie, i) => (
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
              <MovieCard key={movie.id} movie={movie}/>
          </div>
        ))}
      </div>
    );
  }
}



export default MovieList;
