import React, {Component, Fragment} from 'react'

class Footer extends Component{
      render(){
      	return(
          <Fragment>
              <footer className="bg-light">
                <div className="container">
                  <div className="space-top-2 space-bottom-1 space-bottom-lg-2">
                    <div className="row justify-content-lg-between">
                      <div className="col-lg-3 ml-lg-auto mb-5 mb-lg-0">
                        {/* <!-- Logo --> */}
                        <div className="mb-4">
                          <a href="index.html" aria-label="Front"> <img className="brand" src="https://gostreamlabs.com/front/assets/svg/logos/logo.svg" alt="Logo"/></a>
                        </div>
                        {/* <!-- End Logo --> */}
                        {/* <!-- Nav Link --> */}
                        <ul className="nav nav-sm nav-x-0 flex-column">
                          <li className="nav-item">
                            <a className="nav-link media" href="javascript:;"> <span className="media">
                                  <span className="fas fa-location-arrow mt-1 mr-2"></span> <span className="media-body">
                                    153 Williamson Plaza, Maggieberg
                                  </span> </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link media" href="tel:1-062-109-9222"> <span className="media">
                                  <span className="fas fa-phone-alt mt-1 mr-2"></span> <span className="media-body">
                                    +1 (062) 109-9222
                                  </span> </span>
                            </a>
                          </li>
                        </ul>
                        {/* <!-- End Nav Link --> */}
                      </div>
                      <div className="col-6 col-md-3 col-lg mb-5 mb-lg-0">
                        <h5>Company</h5>
                        {/* <!-- Nav Link --> */}
                        <ul className="nav nav-sm nav-x-0 flex-column">
                          <li className="nav-item"><a className="nav-link" href="../pages/about-agency.html">About</a></li>
                          <li className="nav-item"><a className="nav-link" href="../pages/careers.html">Careers <span className="badge badge-primary ml-1">We're hiring</span></a></li>
                          <li className="nav-item"><a className="nav-link" href="../blog/newsroom.html">Blog</a></li>
                          <li className="nav-item"><a className="nav-link" href="../pages/customers.html">Customers</a></li>
                          <li className="nav-item"><a className="nav-link" href="../pages/hire-us.html">Hire us</a></li>
                        </ul>
                        {/* <!-- End Nav Link --> */}
                      </div>
                      <div className="col-6 col-md-3 col-lg mb-5 mb-lg-0">
                        <h5>Features</h5>
                        {/* <!-- Nav Link --> */}
                        <ul className="nav nav-sm nav-x-0 flex-column">
                          <li className="nav-item"><a className="nav-link" href="#">Press</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Release notes</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Integrations</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                        </ul>
                        {/* <!-- End Nav Link --> */}
                      </div>
                      <div className="col-6 col-md-3 col-lg">
                        <h5>Documentation</h5>
                        {/* <!-- Nav Link --> */}
                        <ul className="nav nav-sm nav-x-0 flex-column">
                          <li className="nav-item"><a className="nav-link" href="mailto:example@gmail.com">Support</a></li>
                          <li className="nav-item"><a className="nav-link" href="https://gostreamlabs.com/front/documentation/index.html">Docs</a></li>
                          <li className="nav-item"><a className="nav-link" href="../pages/status.html">Status</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">API Reference</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Tech Requirements</a></li>
                        </ul>
                        {/* <!-- End Nav Link --> */}
                      </div>
                      <div className="col-6 col-md-3 col-lg">
                        <h5>Resources</h5>
                        {/* <!-- Nav Link --> */}
                        <ul className="nav nav-sm nav-x-0 flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="#"> <span className="media align-items-center">
                                  <i className="fa fa-info-circle mr-2"></i>
                                  <span className="media-body">Help</span> </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"> <span className="media align-items-center">
                                  <i className="fa fa-user-circle mr-2"></i>
                                  <span className="media-body">Your Account</span> </span>
                            </a>
                          </li>
                        </ul>
                        {/* <!-- End Nav Link --> */}
                      </div>
                    </div>
                  </div>
                  <hr className="my-0"/>
                  <div className="space-1">
                    <div className="row align-items-md-center mb-7">
                      <div className="col-md-6 mb-4 mb-md-0">
                        {/* <!-- Nav Link --> */}
                        <ul className="nav nav-sm nav-x-0 align-items-center">
                          <li className="nav-item"> <a className="nav-link" href="../pages/privacy.html">Privacy &amp; Policy</a> </li>
                          <li className="nav-item opacity mx-3">/</li>
                          <li className="nav-item"> <a className="nav-link" href="../pages/terms.html">Terms</a> </li>
                          <li className="nav-item opacity mx-3">/</li>
                          <li className="nav-item"> <a className="nav-link" href="#">Site Map</a> </li>
                        </ul>
                        {/* <!-- End Nav Link --> */}
                      </div>
                      <div className="col-md-6 text-md-right">
                        <ul className="list-inline mb-0">
                          {/* <!-- Social Networks --> */}
                          <li className="list-inline-item">
                            <a className="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i className="fab fa-facebook-f"></i> </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i className="fab fa-google"></i> </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i className="fab fa-twitter"></i> </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="btn btn-xs btn-icon btn-soft-secondary" href="#"> <i className="fab fa-github"></i> </a>
                          </li>
                          {/* <!-- End Social Networks --> */}
                          {/* <!-- Language --> */}
                          <li className="list-inline-item">
                            <div className="hs-unfold">
                              <a className="js-hs-unfold-invoker dropdown-toggle btn btn-xs btn-soft-secondary" href="javascript:;" data-hs-unfold-options="{
                                    &quot;target&quot;: &quot;#footerLanguage&quot;,
                                    &quot;type&quot;: &quot;css-animation&quot;,
                                    &quot;animationIn&quot;: &quot;slideInDown&quot;
                                  }" data-hs-unfold-target="#footerLanguage" data-hs-unfold-invoker=""> <img className="dropdown-item-icon" src="https://gostreamlabs.com/front/assets/vendor/flag-icon-css/flags/4x3/us.svg" alt="United States Flag"/> <span>United States</span> </a>
                              <div id="footerLanguage" className="hs-unfold-content dropdown-menu dropdown-unfold dropdown-menu-bottom mb-2 hs-unfold-hidden hs-unfold-content-initialized hs-unfold-css-animation animated hs-unfold-reverse-y" data-hs-target-height="372" data-hs-unfold-content="" data-hs-unfold-content-animation-in="slideInDown" data-hs-unfold-content-animation-out="fadeOut" style={{animationDuration: '300ms'}}> <a className="dropdown-item active" href="#">English</a> <a className="dropdown-item" href="#">Deutsch</a> <a className="dropdown-item" href="#">Español</a> <a className="dropdown-item" href="#">Français</a> <a className="dropdown-item" href="#">Italiano</a> <a className="dropdown-item" href="#">日本語</a> <a className="dropdown-item" href="#">한국어</a> <a className="dropdown-item" href="#">Nederlands</a> <a className="dropdown-item" href="#">Português</a> <a className="dropdown-item" href="#">Русский</a> </div>
                            </div>
                          </li>
                          {/* <!-- End Language --> */}
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Copyright --> */}
                    <div className="w-md-75 text-lg-center mx-lg-auto">
                      <p className="text-muted small">© Front. 2020 Htmlstream. All rights reserved.</p>
                      <p className="text-muted small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
                    </div>
                    {/* <!-- End Copyright --> */}
                  </div>
                </div>
              </footer>
          </Fragment>
        )
      }
}

export default Footer;





