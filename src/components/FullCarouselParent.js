import React, {Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import {connect} from 'react-redux';
import FullCarouselCard from './FullCarouselSoon';
import {Link} from "react-router-dom" 

class CarouselSoon extends Component{
    render() {

        return(
            <div className="cart-page mt-5 mb-2">
                <div className="newlist-homepage">
                    Look at

                    {/* <Link to={"/newlist"}>
                        see more
                        <svg width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.75">
                                <path d="M2 12L21 12" stroke="#fff"></path>
                                <path d="M14 5L21 12L14 19" stroke="#fff"></path>
                            </g>
                        </svg>
                    </Link> */}
                </div>
                <Swiper
                    navigation={true}
                    loop={true}
                    spaceBetween={24}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                          },
                        // 450: {
                        //   slidesPerView: 1.8,
                        // },
                        // 768: {
                        //   slidesPerView: 3.4,
                        // },
                        // 991: {
                        //     slidesPerView: 5,
                        //   }
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                    {this.props.movies.filter((movie) => movie.secondimg).map(movie => (
                        <SwiperSlide key={movie.id} >
                            <FullCarouselCard movie={movie}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        )
    }
}

  const mapStateToProps = (state) => {
    return {
        movies : state.cart.movies
    }
  }
export default connect(mapStateToProps)(CarouselSoon);