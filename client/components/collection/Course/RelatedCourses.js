import React, { Component} from 'react';

export default ()=>{
    return (
        <div className="container space-bottom-2">
            <div className="border-top pt-7 mt-7">
                <h3 className="mb-4">Students also bought</h3>
                    <div className="row">
                        <article className="col-md-6 col-lg-4 mb-5">
                            {/* <!-- Article --> */}
                            <div className="card border h-100">
                                <div className="card-img-top position-relative"> <img className="card-img-top" src="https://gostreamlabs.com/front/assets/svg/components/graphics-1.svg" alt="Image Description"/>
                                    <div className="position-absolute top-0 left-0 mt-3 ml-3"> <small className="btn btn-xs btn-success btn-pill text-uppercase shadow-soft mb-3">Bestseller</small> </div>
                                    <div className="position-absolute bottom-0 left-0 mb-3 ml-4">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <ul className="list-inline mt-n1 mb-0 mr-2">
                                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"/></li>
                                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"/></li>
                                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"/></li>
                                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"/></li>
                                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14"/></li>
                                            </ul> <span className="d-inline-block">
                                <small className="font-weight-bold text-white mr-1">4.91</small>
                                <small className="text-white-70">(1.5k+ reviews)</small>
                                </span> </div>
                                    </div>
                                </div>
                                <div className="card-body"> <span className="d-block small font-weight-bold text-cap mb-2">Code</span>
                                    <div className="mb-3">
                                        <h3><a className="text-inherit" href="course-description.html">Complete Python Bootcamp: Go from zero to hero in Python 3</a></h3> </div>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-group">
                                            <a className="avatar avatar-xs avatar-circle" data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Nataly Gaga"> <img className="avatar-img" src="https://gostreamlabs.com/front/assets/img/100x100/img1.jpg" alt="Image Description" /> </a>
                                        </div>
                                        <div className="d-flex align-items-center ml-auto">
                                            <div className="small text-muted"> <i className="fa fa-book-reader mr-1"></i> 10 lessons </div> <small className="text-muted mx-2">|</small>
                                            <div className="small text-muted"> <i className="fa fa-clock mr-1"></i> 3h 25m </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer border-0 pt-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2"> <small className="d-block text-muted text-lh-sm"><del>$114.99</del></small> <span className="d-block h5 text-lh-sm mb-0">$99.99</span> </div> <a className="btn btn-sm btn-primary transition-3d-hover" href="course-description.html">Preview</a> </div>
                                </div>
                            </div>
                            {/* <!-- End Article --> */}
                        </article>
                    </div>
            </div>
        </div>
    )
}