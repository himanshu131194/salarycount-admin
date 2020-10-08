import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";
import Collapse from './Collapse'
import Authors from './Authors'


class Description extends Component{
    filters = {
        condition : { }
    }
    render(){
        return(
            <div class="container space-top-2 space-top-md-1">
                <div class="row">
                    <div class="col-md-7 col-lg-8">
                        {/* <!-- Info --> */}
                        <div class="pt-0 mt-0">
                            <h3 class="mb-4">What you'll learn</h3>
                            <div class="row">
                                <div class="col-lg-6">
                                    {/* <!-- Icon Block --> */}
                                    <div class="media text-body font-size-1 mb-3"> <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                                        <div class="media-body"> Learn to use Python professionally, learning both Python 2 and Python 3! </div>
                                    </div>
                                    {/* <!-- End Icon Block --> */}
                                </div>
                                <div class="col-lg-6">
                                    {/* <!-- Icon Block --> */}
                                    <div class="media text-body font-size-1 mb-3"> <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                                        <div class="media-body"> Create games with Python, like Tic Tac Toe and Blackjack! </div>
                                    </div>
                                    {/* <!-- End Icon Block --> */}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    {/* <!-- Icon Block --> */}
                                    <div class="media text-body font-size-1 mb-3"> <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                                        <div class="media-body"> Learn advanced Python features, like the collections module and how to work with timestamps! </div>
                                    </div>
                                    {/* <!-- End Icon Block --> */}
                                </div>
                                <div class="col-lg-6">
                                    {/* <!-- Icon Block --> */}
                                    <div class="media text-body font-size-1 mb-3"> <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                                        <div class="media-body"> Learn to use Object Oriented Programming with classes! </div>
                                    </div>
                                    {/* <!-- End Icon Block --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Info --> */}
                   
                        <Collapse/>
                        <Authors/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state=>state, actions)(Description);
