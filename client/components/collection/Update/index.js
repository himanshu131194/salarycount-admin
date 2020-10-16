import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import ReactQuill from 'react-quill'
import axios from 'axios'
import CourseInfo from '../Models/CourseInfo'
import _ from "lodash";

class Update extends Component{
    state = {
        title: '',
        description: '',
        total_reviews: '',
        ratings : '',
        teaser: '',
        download_url:'',
        preCourse: {}
    }
    modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
        ]
    }
    async componentDidMount(){
        const { match: {params: { id }} } = this.props;
        this.setState({ id });
        let {data: {data}} = await axios.get(`/api/popup-course?id=`+id);
        this.setState({ preCourse : data });
    }
    onSaveChanges = async (e)=>{
        e.preventDefault();
        let {data} = await axios.post(`/api/update-courselive`, this.state);
        console.log(data)
    }
    render(){
        return(
            <main id="content" role="main" className="bg-light">
            <div className="container space-1">
              <div className="row">
                <div className="col-lg-12">
                <div id="editAddressCard" className="card mb-3 mb-lg-5">
                    <div className="card-header">
                        <h5 className="card-title">Address</h5> 
                        {/* <Quill/> */}
                    </div>
                    <div className="card-body">
                        <form data-select2-id="268">
                           
                            <div className="row form-group">
                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label input-label">Preloaod</label>
                                <div className="col-sm-9">
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenteredScrollable">
                                        View pre course
                                    </button>
                                </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label input-label">Title</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control"  placeholder="Course teaser" aria-label="Course title" onChange={(e)=>this.setState({title: e.target.value})}/> 
                                </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label input-label">Teaser</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control"  placeholder="Course title" aria-label="Course teaser" onChange={(e)=>this.setState({teaser: e.target.value})}/> </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label input-label">What you will learn</label>
                                <div className="col-sm-9">
                                    <textarea id="exampleFormControlTextarea1" class="form-control" placeholder="At least 2 points" aria-label="At least 2 points" rows="4" onChange={(e)=>this.setState({key_points: e.target.value})}></textarea>
                                </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="zipCodeLabel" className="col-sm-3 col-form-label input-label">Description 
                                </label>
                                <div className="col-sm-9">
                                    <ReactQuill theme="snow" className="quill-custom" modules={this.modules} onChange={(value)=>this.setState({description: value})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="zipCodeLabel" className="col-sm-3 col-form-label input-label">Rating
                                </label>
                                <div className="col-sm-9">
                                    <select id="exampleFormControlSelect2" class="form-control" size="3" onChange={(e)=>this.setState({rating: e.target.value})}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label input-label">Total Reviews</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control"  placeholder="Total reviews" aria-label="Total reviews" onChange={(e)=>this.setState({total_reviews: e.target.value})}/> 
                                </div>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label input-label">Dwonload URL</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control"  placeholder="Download url" aria-label="Download url" onChange={(e)=>this.setState({download_url: e.target.value})}/> 
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer d-flex justify-content-end"> 
                        <a className="btn btn-white" href="javascript:;">Cancel</a>
                        <span className="mx-2"></span> 
                        <a className="btn btn-primary" href="javascript:;" onClick={this.onSaveChanges}>Save Changes</a> 
                    </div>
                </div>
                </div>
              </div>
            </div>
            <CourseInfo Course={this.state.preCourse}/>
            </main>
        )
    }
}

export default connect(state=>state, actions)(Update);
