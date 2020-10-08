import {LOAD_COURSES, LOAD_FILTERS} from './types'
import CONFIG from '../../../config'
import axios from 'axios'


export const loadAllCourses = ({limit, offset, filters}, cb)=>{
    return async (dispatch)=>{
           let err = null, result = []
           try{
            let {data} = await axios.get(`${CONFIG.API_URL}/api/list-courses`, {
                params : {
                   limit, offset, filters
                }
            });
            result = data.data
           }catch(e){
               console.log(e)
               err = e.response.data.error;
           }
           dispatch({
               type: LOAD_COURSES,
               payload: result
           })
           cb(null, result);
    }
}


export const loadAllFilters = (filters={}, cb)=>{
    return async (dispatch)=>{
           let err = null, result = []
           try{
            let {data} = await axios.get(`${CONFIG.API_URL}/api/filters-list`, {
                params : {
                    filters
                }
            });
            result = data.data
           }catch(e){
               console.log(e)
               err = e.response.data.error;
           }
           dispatch({
               type: LOAD_FILTERS,
               payload: result
           })
           cb(null, result);
    }
}

// export const videosByProfile = ({limit, offset, filters}, cb)=>{
//     return async (dispatch)=>{
//            let err = null, result = [];
//            try{
//                 let {data} = await axios.get(`${CONFIG.API_URL}/api/videos-by-profile`, {
//                     params : {
//                        limit, offset, filters
//                     }
//                 });
//                 result = data.data
//            }catch(e){
//                err = e
//            }
//            dispatch({
//                type: VIDEOS_BY_PROFILE,
//                payload: result
//            })
//            cb(null, result);
//     }
// }

// export const dataByProfile = ({model}, cb)=>{
//     return async (dispatch)=>{
//            let err = null, result = [];
//            try{
//                 let {data} = await axios.get(`${CONFIG.API_URL}/api/profile-data`, {
//                     params : {
//                        model
//                     }
//                 });
//                 result = data.data
//            }catch(e){
//                err = e
//            }
//            dispatch({
//                type: PROFILE_DATA,
//                payload: result
//            })
//            cb(null, result);
//     }
// }



// export const fetchCategoriesByWebsites = ({website}, cb)=>{
//     return async (dispatch)=>{
//            let err = null, result = [];
//            try{
//                 let {data} = await axios.get(`${CONFIG.API_URL}/api/categories-by-websites`, {
//                     params : {
//                        website
//                     }
//                 });
//                 result = data.data
//                 cb(null, result);
//            }catch(e){
//                err = e
//                return cb(err, null);
//            }
//     }
// }


