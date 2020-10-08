import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";

class Header extends Component{
      render(){
      	return(
          <Fragment>
			  <header className="header left-aligned-navbar space-top-1">
				  <div className="header-section">
					  <div className="container mt-lg-n2">
						  <nav className="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
							  <div className="navbar-nav-wrap">
									<a className="navbar-brand navbar-nav-wrap-brand" href="/" aria-label="Front">
										<img src="https://gostreamlabs.com/front/assets/svg/logos/logo.svg" alt="Logo"/>
									</a>

									<div className="navbar-nav-wrap-content">
										<div className="hs-unfold">
											<div className="rounded-circle">
												<span className="avatar avatar-xs avatar-circle">
													<img className="avatar-img" src="https://gostreamlabs.com/front/assets/img/100x100/img1.jpg" alt="Image Description"/>
												</span>
											</div>
										</div>
									</div>

									<div className="navbar-nav-wrap-navbar navbar-collapse collapse">
										<ul className="navbar-nav">
											<li className="d-none d-lg-inline-block navbar-nav-item flex-grow-1 mx-2">
												<form className="input-group input-group-sm input-group-merge w-75">
													<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fa fa-search"></i>
													</div>
													</div>
													<input type="text" className="form-control" placeholder="What do you want to learn?" aria-label="What do you want to learn?"/>
												</form>
											</li>
										</ul>
									</div>
							  </div>
						  </nav>
					  </div>
				  </div>
			  </header>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);


