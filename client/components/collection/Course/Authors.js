import React, { Component } from "react";

class Authors extends Component{
    render(){
        return(
            <div class="border-top pt-7 mt-7">
            <h3 class="mb-4">About the instructor</h3>
            <div class="row">
              <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="avatar avatar-xl avatar-circle mb-3">
                  <img class="avatar-img" src="https://gostreamlabs.com/front/assets/img/100x100/img1.jpg" alt="Image Description"/>
                </div>

                {/* <!-- Icon Block --> */}
                <div class="media text-body font-size-1 mb-2">
                  <div class="min-w-3rem text-center mr-2">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="media-body">
                    4.87 Instructor rating
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div class="media text-body font-size-1 mb-2">
                  <div class="min-w-3rem text-center mr-2">
                    <i class="fa fa-comments"></i>
                  </div>
                  <div class="media-body">
                    1,533 reviews
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div class="media text-body font-size-1 mb-2">
                  <div class="min-w-3rem text-center mr-2">
                    <i class="fa fa-user"></i>
                  </div>
                  <div class="media-body">
                    23,912 students
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div class="media text-body font-size-1 mb-2">
                  <div class="min-w-3rem text-center mr-2">
                    <i class="fa fa-play"></i>
                  </div>
                  <div class="media-body">
                    29 courses
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}
              </div>

              <div class="col-lg-8">
                {/* <!-- Info --> */}
                <div class="mb-2">
                  <h4 class="h5 mb-1"><a href="author.html">Nataly Gaga</a></h4>
                  <span class="d-block font-size-1 font-weight-bold">Head of Data Science, Pierian Data Inc.</span>
                </div>

                <p>Nataly Gaga has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. She has publications and patents in various fields such as microfluidics, materials science, and data science technologies.</p>
                {/* <!-- End Info --> */}
              </div>
            </div>
          </div>
        )
    }
}

export default Authors;