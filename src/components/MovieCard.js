import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { addToCart,loadCurrentItem } from "../redux/actions/card.action";
import { bindActionCreators } from "redux";

const MovieCard = ( {loadCurrentItem, addToCart, movie} ) => {
  return (
    <div className="moviecard mb-5">
      <div className="card  shadow-sm">
          <Link to={`details/${movie.id}`} >
            <img
              src={movie.image}
              className="card-img-top"
              alt="Movie img"
              onClick={()=> loadCurrentItem(movie)}
            />
          </Link>
          {movie.status ? <span className="new-card">{movie.status}</span> : " "}

          <div className="card-body">
            <span className="card-rating">
              {movie.vote_average ? movie.vote_average : movie.rating}
            </span>
            <h5 className="card-title">
              {movie.title ? movie.title : movie.name}
            </h5>
            <p className="card-text">{movie.overview}</p>
            <div className="add-button-parent">
              <button
                className="add-button" onClick={() => addToCart(movie.id)}>
                Buy
              </button>
              <span className="card-price">
                  {/* {movie.price} */}
                  {movie.price == 0 ? 'free':`${movie.price}$`}

              </span>
            </div>
          </div>
        </div>
         
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCart: (id) => addToCart(id),
      loadCurrentItem: (item) =>  loadCurrentItem(item)
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(MovieCard);
