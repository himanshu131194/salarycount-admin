import React, {Component, Fragment, Suspense, lazy } from 'react';
import AllVideos from './collection/Videos/List'
class Home extends Component{
      render(){
      	 return(
                  <Fragment>
                        <AllVideos/>
                  </Fragment>
      	 )
      }
}
export default Home;

