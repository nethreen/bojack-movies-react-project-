import React from 'react'
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/card.action";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

const MovieCardInner = ({currentItem, addToCart})=> {
    return (
        <div>   
            <Link to={"/"} className="breadcrumb-card mt-5">
                Ana Sayfa
            </Link>
            <div className="moviecard mt-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="moviecard-img">
                            <img src={currentItem.image} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <div className="moviecard-content">
                            <div>
                                <div className="moviecard-content-top">
                                    <h3>{currentItem.name}</h3>
                                    <span className="moviecard-rating">{currentItem.rating}</span> 
                                </div>
                                <p>{currentItem.overview}</p> 
                            </div>
                            <div className="movie-card-parent">
                                <span className="movie-card-span">
                                    {currentItem.price == 0 ? 'free': `${currentItem.price}$`}
                                </span>
                                <button onClick={() => addToCart(currentItem.id)} className="add-button">Buy</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentItem : state.cart.currentItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        addToCart: (id) => addToCart(id),
      },
      dispatch
    );
  };
export default connect(mapStateToProps,mapDispatchToProps) (MovieCardInner);