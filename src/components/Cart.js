import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartMovie from './CartMovie';
import Popup from './Popup';
import {removeFromCart} from "../redux/actions/card.action";
import { bindActionCreators } from "redux";

const Cart = ( { cart,removeFromCart } ) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItem] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    useEffect(() => {
      let items = 0;
      let price = 0;

      cart.forEach(item => {
        items += item.qty;
        price += item.qty * item.price
      })

      setTotalPrice(price);
      setTotalItem(items)

    }, [cart, totalItems, totalPrice, setTotalItem, setTotalPrice])

    return (
      <div>
        <Link to={"/"} className="breadcrumb-card mt-5">
            Ana Sayfa
        </Link>
        <div className="form-container cart-page mt-5">
        <div>

          {isOpen && <Popup
            content={<>
              <h5>Design your Popup</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?</p>
                <div className="cart-popup-price">
                  total
                  <span>pieces -{totalItems}</span>
                  <span>${totalPrice}</span>
                </div>
                
            </>}
            handleClose={togglePopup}
          />}
        </div>
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-9 sm-12">
              <div className="row">
                {cart.length > 0 ?
                  cart.map((item,i)=> (
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12" key={i}>
                        <CartMovie key={item.id} itemData={item}/>
                    </div>
                  )) : 
                  
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 cart-empty">
                        <h4>
                          Your cart is empty
                        </h4>
                          <Link to={"/"} className="breadcrumb-card mt-3">
                            add to the basket now
                          </Link>
                    </div>
                  }
              </div>    
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="cart-page-price">
                  total
                  <span>{totalItems} - pieces</span>
                  <span>$ {totalPrice}</span>
              </div>
              <button className="buy-button"
                type="button"
                value="Click to Open Popup"
                onClick={togglePopup}>
                Buy
              </button>
            </div>
          </div>
          <div className="cart-blank">

          </div>
        </div>

      </div>
    );
}
const mapStateToProps = (state) => {
  return {
      cart : state.cart.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      removeFromCart: (id) => removeFromCart(id),
    },
    dispatch
  );
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
