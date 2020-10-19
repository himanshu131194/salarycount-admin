import React, {Component, Fragment} from 'react'
import CONFIG from '../../../../config'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component{
      componentDidMount(){
          console.log(this.props)
          this.props.loadAllCourses({offset:0, limit:6, filters:{}}, ()=>{
              console.log(this.props);
          });
      }
      slugToLink = async (e)=>{
        e.preventDefault();
        const {data:{data: posters}} = await axios.get(`${CONFIG.API_URL}/api/get-slug`);
        const sleep = m => new Promise(r => setTimeout(r, m));
        
        for(let x of posters){
            const { poster: { thumb: { url } }, _id } = x;
            console.log(url);
            const openURL = window.open(url+"?id="+_id, "_blank");
            await sleep(5000, 8000);
            openURL.close();
        }
         
        //  const blob = new Blob([data], {type: 'image/*'})
        //  let a = document.createElement('a');
        //  a.href = window.URL.createObjectURL(blob);
        //  a.download = `ddd.jpg`
        //  a.click();
        //  let a = document.createElement('a');
        //  a.href='https://www.w3schools.com/images/myw3schoolsimage.jpg';
        //  a.download = true;
        //  document.getElementsByTagName('body')[0].appendChild(a);
        // //  a.href='https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/16/courses/1354/preview_image/adobe-xd-for-beginners-400x277.png';
        //  a.click();
        //  const link = document.createElement("a");
        //  link.href = 'https://www.w3schools.com/images/myw3schoolsimage.jpg';
        //  link.download = `t.jpg`;
        //  document.body.appendChild(link);
        //  link.click();
        //  window.open("https://www.w3schools.com/images/myw3schoolsimage.jpg", "_blank")

         console.log(courses); 
      }
      render(){
      	return(
          <Fragment>
            <div className="border-bottom pb-3 mb-5">
                  <div className="row justify-content-md-start align-items-md-center">
                      <div className="col-md-4 mb-3 mb-md-0">
                        <p className="font-size-1 mr-md-auto mb-0"><span className="text-dark font-weight-bold">195 courses</span> to get started</p>
                      </div>
                      <div className="col-md-8 text-md-right">
                      </div>
                  </div>
            </div>
                {/* COURSE CARD */}
                {this.props.listOfCourses && this.props.listOfCourses.map((course)=>{
                    return(
                        <Link className="d-block border-bottom pb-5 mb-5" to={`/courses${course.courseUrl}`}>
                        <div className="row mx-md-n2">
                            <div className="col-md-4 px-md-2 mb-3 mb-md-0">
                            <div className="position-relative">
                                <img className="img-fluid w-100 rounded" src={course.poster.thumb.url} alt="Image Description"/>
    
                                <div className="position-absolute top-0 left-0 mt-3 ml-3">
                                <small className="btn btn-xs btn-success text-uppercase shadow-soft py-1 px-2 mb-3">free</small>
                                </div>
    
                                <div className="position-absolute bottom-0 left-0 mb-3 ml-4">
                                <div className="d-flex align-items-center flex-wrap">
                                    <ul className="list-inline mt-n1 mb-0 mr-2">
                                    <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                    <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                    <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                    <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                    <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                    </ul>
                                    <span className="d-inline-block">
                                    <small className="font-weight-bold text-white mr-1">4.91</small>
                                    <small className="text-white-70">(1.5k+ reviews)</small>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
    
                            <div className="col-md-8">
                            <div className="media mb-2">
                                <div className="media-body mr-7">
                                    <h3 className="text-hover-primary text-capitalize">{course.title}</h3>
                                </div>
    
                                <div className="d-flex ml-auto">
                                <div className="text-right">
                                    <a class="btn btn-sm btn-primary" onClick={this.slugToLink}>Update</a>
                                </div>
                                </div>
                            </div>
    
                            <div className="d-flex justify-content-start align-items-center small text-muted mb-2">
                                <div className="d-flex align-items-center">
                                <div className="avatar-group">
                                    {course.authors && course.authors.map((author)=>{
                                        return(
                                            <span className="avatar avatar-xs avatar-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Nataly Gaga">
                                                <img className="avatar-img" src={author.poster.thumb.url} alt="Image Description" />
                                            </span>
                                        )
                                    })}

                                </div>
                                </div>
                                <div className="ml-auto">
                                <i className="fa fa-book-reader mr-1"></i>
                                 {course.totalLessons} lessons
                                </div>
                                <span className="text-muted mx-2">|</span>
                                <div className="d-inline-block">
                                <i className="fa fa-clock mr-1"></i>
                                3h 25m
                                </div>
                                <span className="text-muted mx-2">|</span>
                                <div className="d-inline-block">
                                <i className="fa fa-signal mr-1"></i>
                                All levels
                                </div>
                            </div>
    
                            <p className="font-size-1 text-body mb-0">{course.summary}</p>

                            </div>
                        </div>
                      </Link>
                    )
                })}
                {/* END COURSE CARD */}

                {/* PAGINATION */}
                <Pagination/>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(List);






// Product ID	QTY	Country
// 1	10	US
// 2	20	US
// 3	10	UK
// 4	20	US
// 5	30	UK
// 6	30	US
// 7	30	US


// -	list all the products that have same quantity in different countries the output should be like the following table

// Product ID	QTY	Country
// 1	10	US
// 3	10	UK
// 5	30	UK
// 6	30	US
// 7	30	US


// select * from table inner join 


// select * from table where QTY = (select QYT frm table);

// create table products(id int, qty varchar, country varchar);

// insert into products (1,10,'US'), (2,20,'US'), (3,10,'UK'), (4,20,'US'), (5,30,'UK'), (6,30,'US'), (7,30,'US');

// (1,10,'US'), (2,20,'US'), (3,10,'UK'), (4,20,'US'), (5,30,'UK'), (6,30,'US'), (7,30,'US')

// select x,y, (x+y) from calc;

// insert into products values (1,10,'US'), (2,20,'US'), (3,10,'UK'), (4,20,'US'), (5,30,'UK'), (6,30,'US'), (7,30,'US');


// select * from products whrere