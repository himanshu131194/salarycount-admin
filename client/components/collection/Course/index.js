import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";
import Sidebar from './Sidebar'
import Description from './Description'
import RelatedCourses from './RelatedCourses'
import Authors from './Authors'


class Main extends Component{
    filters = {
        condition : { }
    }
    componentDidMount(){
        this.filters.condition.id = '5f7038746dd75df4e428927d';
        this.props.loadAllFilters(this.filters, ()=>{
            console.log(this.props);
        })
    }
    onSelectCategory = (id)=>{
        // console.log(id);
        this.filters.condition.id = id;
        this.props.loadAllFilters(this.filters, ()=>{
            console.log(this.props);
        })
    }
    render(){
        return(
            <main id="content" role="main">
                <div className="position-relative">
                    <div className="gradient-y-overlay-lg-white bg-img-hero space-2" style={{backgroundImage: "url('/img/img10.jpg')"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 col-lg-8"> <small className="btn btn-xs btn-success btn-pill text-uppercase mb-2">Bestseller</small>
                                    <h1 className="text-lh-sm">Complete Python Bootcamp: Go from zero to hero in Python 3</h1>
                                    <p>Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!</p>
                                    <div className="d-flex align-items-center flex-wrap">
                                        {/* <!-- Authors --> */}
                                        <div className="d-flex align-items-center mr-4">
                                            <div className="avatar-group"> <span className="avatar avatar-xs avatar-circle">
                                        <img className="avatar-img" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/16/profiles/265/profileImage/iIGn1N2b.jpg" alt="Image Description"/>
                                        </span> </div> <span className="pl-2">Created by <a className="link-underline" href="author.html">Nataly Gaga</a></span> </div>
                                        {/* <!-- End Authors --> */}
                                        {/* <!-- Rating --> */}
                                        <div className="d-flex align-items-center flex-wrap">
                                            <ul className="list-inline mt-n1 mb-0 mr-2">
                                                <li className="list-inline-item mx-0"><img src="/img/star.svg" alt="Review rating" width="16"/></li>
                                                <li className="list-inline-item mx-0"><img src="/img/star.svg" alt="Review rating" width="16"/></li>
                                                <li className="list-inline-item mx-0"><img src="/img/star.svg" alt="Review rating" width="16"/></li>
                                                <li className="list-inline-item mx-0"><img src="/img/star.svg" alt="Review rating" width="16"/></li>
                                                <li className="list-inline-item mx-0"><img src="/img/star-half.svg" alt="Review rating" width="16"/></li>
                                            </ul> <span className="d-inline-block">
                                        <span className="text-dark font-weight-bold mr-1">4.87</span> <span className="text-muted">(1.5k+ reviews)</span> </span>
                                        </div>
                                        {/* <!-- End Rating --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Sidebar/>
                </div>
                <Description/>
                <RelatedCourses/>
            </main>
        )
    }
}

export default connect(state=>state, actions)(Main);
