import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart,loadCurrentItem } from "../redux/actions/card.action";
import { bindActionCreators } from "redux";

const FullCarouselCard = ({movie,loadCurrentItem})=>{
    return(
        <div className="fullcarousel mb-4 shadow-sm">
            <Link to={`details/${movie.id}`} >
                <img
                src={movie.secondimg ? movie.secondimg : null}
                className="card-img-top"
                alt="Movie img"
                onClick={()=> loadCurrentItem(movie)}
                />
            </Link>
            {movie.status ? <span className="new-card">{movie.status}</span> : " "}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        addToCart: (id) => addToCart(id),
        loadCurrentItem: (movie) =>  loadCurrentItem(movie)
      },
      dispatch
    );
  };
export default connect(null,mapDispatchToProps) (FullCarouselCard);