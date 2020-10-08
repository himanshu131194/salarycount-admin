import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import MainRouter from './MainRouter'

import reducers from './components/reducers'

class App extends Component{
      shouldComponentUpdate(){
         return false;
      }
      render(){
      	 return(
      	 	<BrowserRouter>
                 <Provider store={applyMiddleware(reduxThunk)(createStore)(reducers)}>
                   <MainRouter/>
                 </Provider>
            </BrowserRouter>
      	 )
      }
}

export default App;