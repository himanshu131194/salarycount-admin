import {LOAD_COURSES, LOAD_FILTERS} from '../actions/types'

export const listOfCoursesReducer = (state=null, action)=>{
	switch(action.type){
		  case LOAD_COURSES:
			return action.payload;
		  default: 
		   return state;
	}
} 

export const listOfFiltersReducer = (state=null, action)=>{
	switch(action.type){
		  case LOAD_FILTERS:
			return action.payload;
		  default: 
		   return state;
	}
} 

