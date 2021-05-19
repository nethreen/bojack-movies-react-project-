import React,{Component}  from 'react';
import {Link} from 'react-router-dom';
import SideBar from './HomepageSidebar';
class About extends Component {

    render() {
        return (
            <div className="mt-5 my-5">
                  <Link to={"/"} className="breadcrumb-card mb-3">
                    Ana Sayfa
                </Link>
                <div className="moviecard row new-page-list about-page py-5 px-3">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <SideBar/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <h3>
                            What is Lorem Ipsum?
                        </h3>
                        <p>
                            <b> Lorem Ipsum </b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;