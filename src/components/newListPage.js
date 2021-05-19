import React, {Component} from 'react'
import { connect } from 'react-redux'
import NewCard from "./CarouselSoon"
import {Link} from "react-router-dom"
import SideBar from './HomepageSidebar'
class NewListPage extends Component {
    render(){
        return (
            <div>
                <div className="row new-page-list">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                        <Link to={"/"} className="breadcrumb-card">
                            Ana Sayfa
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <SideBar/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div className="row">
                            {this.props.movies.filter((movie) => movie.status == "new").map(movie => (
                                <div className="col-xl-4col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                                    <NewCard key={movie.id} movie={movie}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies : state.cart.movies
    }
}
export default connect(mapStateToProps)(NewListPage);