import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class HomepageSidebar extends Component {
    render() {
        return (
            <div className="homepage-sidebar-parent">  
                <div className="homepage-sidebar">
                    <Link to="/"  className="add-button popup-buttons">
                        Homepage
                    </Link>
                    <Link to="/moremovielist"  className="add-button popup-buttons">
                        Movie List
                    </Link>
                    <Link to="/newlist"  className="add-button popup-buttons">
                        New List
                    </Link>
                    <Link to="/about"  className="add-button popup-buttons">
                        About
                    </Link>
                    <Link to="/contact"  className="add-button popup-buttons">
                        Contact
                    </Link>
                </div>
            </div>
        )
    }
}
