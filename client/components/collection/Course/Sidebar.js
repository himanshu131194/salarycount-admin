import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";

class Main extends Component{
    filters = {
        condition : { }
    }
    render(){
        return(
            <div className="container space-top-md-2 position-md-absolute top-0 right-0 left-0">
                <div className="row justify-content-end">
                    <div id="stickyBlockStartPoint" className="col-md-5 col-lg-4 position-relative z-index-2" style={{}}>
                        <div className="js-sticky-block card border" data-hs-sticky-block-options="{
                            &quot;parentSelector&quot;: &quot;#stickyBlockStartPoint&quot;,
                            &quot;breakpoint&quot;: &quot;md&quot;,
                            &quot;startPoint&quot;: &quot;#stickyBlockStartPoint&quot;,
                            &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;,
                            &quot;stickyOffsetTop&quot;: 12,
                            &quot;stickyOffsetBottom&quot;: 12
                            }" style={{}}>
                            <div className="position-relative p-1">
                                {/* <!-- Video Popup --> */}
                                <a className="js-fancybox video-player" href="javascript:;" data-hs-fancybox-options="{
                                &quot;src&quot;: &quot;//youtube.com/0qisGSwZym4&quot;,
                                &quot;caption&quot;: &quot;Front - Responsive Website Template&quot;,
                                &quot;speed&quot;: 700,
                                &quot;buttons&quot;: [&quot;fullScreen&quot;, &quot;close&quot;],
                                &quot;youtube&quot;: {
                                &quot;autoplay&quot;: 1
                                }
                            }"> <img className="card-img-top" src="/img/graphics-1.svg" alt="Image Description" /> <span className="video-player-btn video-player-centered text-center">
                                <span className="video-player-icon mb-2">
                                <i className="fa fa-play"></i>
                                </span> <span className="d-block text-center text-white">
                                {/* Preview this course */}
                                </span> </span>
                                </a>
                                {/* <!-- End Video Popup --> */}
                            </div>
                            <div className="card-body">
                                <div className="mb-3"> <span className="h2 text-lh-sm mr-1 mb-0">$59.00</span> <span className="lead text-muted text-lh-sm"><del>$114.99</del></span> </div>
                                <div className="mb-2"> <a className="btn btn-block btn-primary transition-3d-hover" href="#">Buy Now</a> </div>
                                <div className="text-center mb-4">
                                    <p className="small">30-day money-back guarantee</p>
                                </div>
                                <h2 className="h4">This course includes</h2>
                                {/* <!-- Icon Block --> */}
                                <div className="media text-body font-size-1 mb-2">
                                    <div className="min-w-3rem text-center mr-3"> <i className="fa fa-video"></i> </div>
                                    <div className="media-body"> 46.5 hours on-demand video </div>
                                </div>
                                {/* <!-- End Icon Block --> */}
                                {/* <!-- Icon Block --> */}
                                <div className="media text-body font-size-1 mb-2">
                                    <div className="min-w-3rem text-center mr-3"> <i className="fa fa-file"></i> </div>
                                    <div className="media-body"> 77 articles </div>
                                </div>
                                {/* <!-- End Icon Block --> */}
                                {/* <!-- Icon Block --> */}
                                <div className="media text-body font-size-1 mb-2">
                                    <div className="min-w-3rem text-center mr-3"> <i className="fa fa-file-download"></i> </div>
                                    <div className="media-body"> 85 downloadable resources </div>
                                </div>
                                {/* <!-- End Icon Block --> */}
                                {/* <!-- Icon Block --> */}
                                <div className="media text-body font-size-1 mb-2">
                                    <div className="min-w-3rem text-center mr-3"> <i className="fa fa-infinity"></i> </div>
                                    <div className="media-body"> Full time access </div>
                                </div>
                                {/* <!-- End Icon Block --> */}
                                {/* <!-- Icon Block --> */}
                                <div className="media text-body font-size-1 mb-2">
                                    <div className="min-w-3rem text-center mr-3"> <i className="fa fa-mobile"></i> </div>
                                    <div className="media-body"> Access on mobile and Tablet </div>
                                </div>
                                {/* <!-- End Icon Block --> */}
                                {/* <!-- Icon Block --> */}
                                <div className="media text-body font-size-1 mb-2">
                                    <div className="min-w-3rem text-center mr-3"> <i className="fa fa-certificate"></i> </div>
                                    <div className="media-body"> Certificate of Completion </div>
                                </div>
                                {/* <!-- End Icon Block --> */}
                            </div>
                            {/* <!-- Button trigger modal --> */}
                            <a className="card-footer text-center font-weight-bold py-3" data-toggle="modal" data-target="#copyToClipboardModal" href="javascript:;"> <i className="fa fa-share mr-1"></i> Share </a>
                            {/* <!-- End Button trigger modal --> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state=>state, actions)(Main);
