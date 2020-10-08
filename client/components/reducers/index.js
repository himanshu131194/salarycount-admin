import {combineReducers} from 'redux'
import {listOfCoursesReducer, listOfFiltersReducer} from './reducers'

export default combineReducers({
	  listOfCourses :  listOfCoursesReducer,
	  listOfFilters :  listOfFiltersReducer
})
