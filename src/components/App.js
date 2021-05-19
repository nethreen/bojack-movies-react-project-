import React from 'react'

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Contact from '../components/Contact';
import MovieCardInner from '../components/MovieCardInner';
import EditMovie from '../components/EditMovie';
import Login from '../components/Login';
import Register from '../components/Register';
import Navbar from '../components/Navbar';
import About from '../components/about';
import Cart from '../components/Cart';
// import SideBar from './HomepageSidebar'
import MiniContext from './MiniContext'
import MovieListPage from './MovieListPage'
import NewListPage from './newListPage'
import CarouselNew from './CarouselParent'
import FullCarousel from './FullCarouselParent';
// import CarouselSoon from '../components/CarouselSoon';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartAction } from "../redux/actions/card.action";
class App extends React.Component {
    state = {
        search: "",  
        value : 0,    

    }


    // deleteCard =(movie) =>{
    //     // this.props.movies`${movie.id}`
    //     const newMovieList = this.state.movies.filter(
    //         mov => mov.id !== movie.id 
    //         )
    //         this.setState(state => ({
    //             movies: newMovieList
    //     }))
    // }
    // // axios api add
    // AddMovie = async (movie) =>{
    //   await  axios.post(this.state.movies, movie);
    //     this.setState(state => ({
    //         movies: state.movies.concat([movie])
    //     }))
    //     this.getMovie()

    // }
    // // axios api edit
    // EditMovie = async (id, updatedMovie) =>{
    //     await  axios.put(this.state.movies`${id}`, updatedMovie);
    //     this.getMovie()

    // }


    searchMovie = (event) =>{
        this.setState({search:event.target.value})
    }

    addToCart = (movie) => {
        this.setState({ value: this.state.value + 1 }, () =>
          this.props.cartAction(this.state.value)
        );
    };


    render() {

        let filterMovies = this.props.movies.filter(
            (movie) => {
                if (movie.title) {
                    return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }else {
                    return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            }
        ).sort((a,b) =>{
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
        })

        return (
            <Router>
                <div className="background">
                    <div className="container">
                     
                        <Navbar/>
                            {/* <CarouselSoon/> */}
                        <Switch>
                            <Route path="/" exact render={() =>(
                                <>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <FullCarousel/>

                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 my-3 column">
                                            <SearchBar searchMovieProp ={this.searchMovie} />
                                        </div>
                                        
                                    </div>
                                    <MovieList             
                                        movies={filterMovies}
                                        // deleteCardProp = {this.deleteCard}
                                        // increment = {this.incrementCard}
                                        />
                                    <CarouselNew/>
                                    <MiniContext/>

                                </>
                                )}>
                            </Route>    

                            {/* <Route path="/add" exact render={({history}) =>(
                                <AddMovie
                                onAddMovie= {(movie) => {this.AddMovie(movie)
                                    history.push("/")
                                }}/>
                                )}>
                            </Route>    */}
                            <Route path="/edit/:id"  render={(props) =>(
                                <EditMovie
                                {...props}
                                onEditMovie= {(id,movie) => {
                                    this.EditMovie(id,movie)
                                }}/>
                                )}>
                            </Route>   
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route exact path="/details/:id" component={MovieCardInner}/>
                            <Route path="/newlist" component={NewListPage}/>
                            <Route path="/moremovielist" component={MovieListPage}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/edit/:id" component={EditMovie}/>
                            <Route path="/about" component={About}/>
                            <Route path="/cart" component={Cart}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        cartAction: (data) => cartAction(data),
      },
      dispatch
    );
  };
  const mapStateToProps = (state) => {
    return {
        movies : state.cart.movies
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(App);
