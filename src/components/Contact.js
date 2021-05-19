import React, { Component } from "react";
import {Link} from 'react-router-dom';
import SideBar from './HomepageSidebar';

class AddMovie extends Component {





  render() {
    return (
        <div className="mt-5 my-5">
            <Link to={"/"} className="breadcrumb-card mb-3">
                Ana Sayfa
            </Link>
            <div className="moviecard row new-page-list about-page py-5 px-3">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                    <h3>
                        What is Lorem Ipsum?
                    </h3>
                    <p>
                        <b> Lorem Ipsum </b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9330.796234120451!2d-122.42951604528132!3d37.82556597707859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f9b38c1c99%3A0xd15844a27f9a58a5!2sAlkatraz!5e1!3m2!1saz!2s!4v1621417769361!5m2!1saz!2s" className="contact-map" allowfullscreen="" loading="lazy"></iframe> 
                </div>
            </div>
        </div>
    );
  }
}

export default AddMovie;
