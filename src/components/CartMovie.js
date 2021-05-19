import React, {useState} from 'react';
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {removeFromCart, adjustyQty,loadCurrentItem} from "../redux/actions/card.action";
import { bindActionCreators } from "redux";

const CartMovie = ( {itemData, removeFromCart, adjustyQty,loadCurrentItem} ) => {
    
    const free = Number(0);

    const [input, setInput] = useState(itemData.qty);

    const onChangeHandler = (e) =>{
        setInput(e.target.value);
        adjustyQty(itemData.id,e.target.value)
    }


    return (
        <div className="">
            <div  className="card mb-4 shadow-sm">
                <Link to={`details/${itemData.id}`}>
                    <img
                        src={itemData.image}
                        className="card-img-top"
                        alt="Movie img"
                        onClick={()=> loadCurrentItem(itemData)}
                        />
                </Link>
                {/* {itemData.status ? <span className="new-card">{itemData.status}</span> : " "} */}

                <div className="card-body">
                    <span className="card-rating">
                    {itemData.vote_average ? itemData.vote_average : itemData.rating}
                    </span>
                    <button className="cart-remove" onClick={() => removeFromCart(itemData.id)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M18 6L6 18" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 6L18 18" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </button>
                    <h5 className="card-title">
                    {itemData.title ? itemData.title : itemData.name}
                    </h5>
                    <p className="card-text">{itemData.overview}</p>
                         <div className="d-flex justify-content-between align-items-center">
                         </div>
                    <div className="cart-button">
                        <span className="card-price">
                            {itemData.price == 0 ? 'free': `${itemData.price}$` }
                        </span>
                        <input type="number" className="cart-button-input" value={input} min="1" onChange={onChangeHandler} name="qty" id="qty"/>
                    </div>
                </div>
            </div>
    
        </div> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        removeFromCart: (id) => removeFromCart(id),
        adjustyQty: (id,value) => adjustyQty(id,value),
        loadCurrentItem: (item) =>  loadCurrentItem(item)

      },
      dispatch
    );
  };


export default connect(null,mapDispatchToProps)(CartMovie);