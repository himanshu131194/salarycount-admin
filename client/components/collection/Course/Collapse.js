import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";

class Description extends Component{
    filters = {
        condition : { }
    }
    render(){
        return(
            <div class="border-top pt-7 mt-7">
                <div class="row mb-4">
                    <div class="col-8">
                        <h3 class="mb-0">Course content</h3> </div>
                    <div class="col-4 text-right">
                        <div class="row">
                            <div class="col-lg-6"> <span class="font-size-1">186 lectures</span> </div>
                            <div class="col-lg-6"> <span class="font-size-1">24:10:28</span> </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div class="card border mb-1">
                    <div class="card-header card-collapse" id="coursesHeadingOne">
                        <a class="btn btn-link btn-sm btn-block card-btn p-3" href="javascript:;" role="button" data-toggle="collapse" data-target="#coursesCollapseOne" aria-expanded="true" aria-controls="coursesCollapseOne">
                            {/* <!-- Header --> */}
                            <span class="row">
                                <span class="col-8">
                                <span class="media">
                                    <span class="card-btn-toggle mr-3 ml-0">
                                    <span class="card-btn-toggle-default">+</span> <span class="card-btn-toggle-active">−</span> </span> <span class="media-body">
                                    <span class="text-body font-weight-bold mr-5">Course overview</span> </span>
                            </span>
                            </span> <span class="col-4 text-right">
                                <span class="row">
                                    <span class="col-lg-6">
                                    <span class="text-muted">5 lectures</span> </span> <span class="col-lg-6">
                                    <span class="text-muted">15:32</span> </span>
                            </span>
                            </span>
                            </span>
                            {/* <!-- End Header --> */}
                        </a>
                    </div>
                    <div id="coursesCollapseOne" class="collapse show" aria-labelledby="coursesHeadingOne" style={{}}>
                        <div class="card-body p-0">
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8">
                                        <a class="media font-size-1 mr-5" href="#"> <i class="fa fa-play-circle min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i> <span class="media-body">
                                        <span>Course introduction</span> </span>
                                        </a>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> <a class="font-size-1" href="#">Preview</a> </div>
                                            <div class="col-lg-6"> <span class="text-primary font-size-1">06:39</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
           
                {/* CARD */}           
                <div class="card border mb-1">
                    <div class="card-header card-collapse" id="coursesHeadingThree">
                        <a class="btn btn-link btn-sm btn-block card-btn p-3 collapsed" href="javascript:;" role="button" data-toggle="collapse" data-target="#coursesCollapseThree" aria-expanded="false" aria-controls="coursesCollapseThree">
                            {/* <!-- Header --> */}
                            <span class="row">
                                    <span class="col-8">
                                    <span class="media">
                                        <span class="card-btn-toggle mr-3 ml-0">
                                        <span class="card-btn-toggle-default">+</span> <span class="card-btn-toggle-active">−</span> </span> <span class="media-body">
                                        <span class="text-body font-weight-bold mr-5">Python object and data structure courses</span> </span>
                            </span>
                            </span> <span class="col-4 text-right">
                                    <span class="row">
                                        <span class="col-lg-6">
                                        <span class="text-muted">6 lectures</span> </span> <span class="col-lg-6">
                                        <span class="text-muted">14:46</span> </span>
                            </span>
                            </span>
                            </span>
                            {/* <!-- End Header --> */}
                        </a>
                    </div>
                    <div id="coursesCollapseThree" class="collapse" aria-labelledby="coursesHeadingThree" style={{}}>
                        <div class="card-body p-0">
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8"> <span class="media text-body font-size-1 mr-5">
                                        <i class="fa fa-play-circle min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i>
                                        <span class="media-body">
                                            <span>Introduction to Python Data Types</span> </span>
                                        </span>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> </div>
                                            <div class="col-lg-6"> <span class="font-size-1">04:02</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8">
                                        <a class="media font-size-1 mr-5" href="#"> <i class="fa fa-play-circle min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i> <span class="media-body">
                                            <span>Python numbers</span> </span>
                                        </a>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> <a class="font-size-1" href="#">Preview</a> </div>
                                            <div class="col-lg-6"> <span class="text-primary font-size-1">04:11</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8"> <span class="media text-body font-size-1 mr-5">
                                        <i class="fa fa-code min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i>
                                        <span class="media-body">
                                            <span>Numbers: Simple Arithmetic</span> </span>
                                        </span>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> </div>
                                            <div class="col-lg-6"> <span class="font-size-1">1 question</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8"> <span class="media text-body font-size-1 mr-5">
                                        <i class="fa fa-file min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i>
                                        <span class="media-body">
                                            <span>Numbers - FAQ</span> </span>
                                        </span>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> </div>
                                            <div class="col-lg-6"> <span class="font-size-1">02:49</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8"> <span class="media text-body font-size-1 mr-5">
                                        <i class="fa fa-bolt min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i>
                                        <span class="media-body">
                                            <span>Numbers Quiz</span> </span>
                                        </span>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> </div>
                                            <div class="col-lg-6"> <span class="font-size-1">3 questions</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                            {/* <!-- Course Program --> */}
                            <div class="border-bottom py-3 pr-3 pl-6">
                                <div class="row">
                                    <div class="col-8"> <span class="media text-body font-size-1 mr-5">
                                        <i class="fa fa-play-circle min-w-3rem text-center opacity-lg mt-1 mr-2 ml-1"></i>
                                        <span class="media-body">
                                            <span>Variable Assignments</span> </span>
                                        </span>
                                    </div>
                                    <div class="col-4 text-right">
                                        <div class="row">
                                            <div class="col-lg-6"> </div>
                                            <div class="col-lg-6"> <span class="font-size-1">07:54</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Program --> */}
                        </div>
                    </div>
                </div>
                {/* END CARD */}


                {/* INFO */}
                <div class="border-top pt-7 mt-7">
                    <h3 class="mb-4">Description</h3>
                    <p>Become a Python Programmer and learn one of employer's most requested skills of 2019!</p>
                    <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3. (Note, we also provide older Python 2 notes in case you need them)</p>
                    {/* <!-- Read More - Collapse --> */}
                    <div class="collapse" id="collapseDescriptionSection">
                        <p>With over 100 lectures and more than 20 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, and homework assignments as well as 3 major projects to create a Python project portfolio!</p>
                        <p>This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!</p>
                        <p>We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered!</p>
                        <p>We cover a wide variety of topics, including:</p>
                        <ul class="text-body pl-6">
                            <li>Command Line Basics</li>
                            <li>Installing Python</li>
                            <li>Running Python Code</li>
                            <li>Strings</li>
                            <li>Lists&nbsp;</li>
                            <li>Dictionaries</li>
                            <li>Tuples</li>
                            <li>Sets</li>
                            <li>Number Data Types</li>
                            <li>Print Formatting</li>
                            <li>Functions</li>
                            <li>Scope</li>
                            <li>args/kwargs</li>
                            <li>Built-in Functions</li>
                            <li>Debugging and Error Handling</li>
                            <li>Modules</li>
                            <li>External Modules</li>
                            <li>Object Oriented Programming</li>
                            <li>Inheritance</li>
                            <li>Polymorphism</li>
                            <li>File I/O</li>
                            <li>Advanced Methods</li>
                            <li>Unit Tests</li>
                            <li>and much more!</li>
                        </ul>
                        <p>This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you'll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!</p>
                    </div>
                    {/* <!-- End Read More - Collapse --> */}
                    {/* <!-- Link --> */}
                    <a class="link link-collapse small font-size-1 font-weight-bold pt-1" data-toggle="collapse" href="#collapseDescriptionSection" role="button" aria-expanded="false" aria-controls="collapseDescriptionSection"> <span class="link-collapse-default">Read more</span> <span class="link-collapse-active">Read less</span> <span class="link-icon ml-1">+</span> </a>
                    {/* <!-- End Link --> */}
                </div>
                {/* END INFO */}
           
            </div>
        )
    }
}

export default connect(state=>state, actions)(Description);
