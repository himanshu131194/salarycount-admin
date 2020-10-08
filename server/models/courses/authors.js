import mongoose from 'mongoose'
import CONFIG from '../../../config';
const {DB} = CONFIG;

const Authors = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    poster : {
        thumb : {
            url: { type: String},
            bucket: { type: String},
            file: { type: String},
            path: { type: String}
        },
        original: {
            url: { type: String},
            bucket: { type: String},
            file: { type: String},
            path: { type: String}
        }
    },
    coursesCount: {
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    about:{
        type: String
    },
    url:{
        type: String
    },
    website: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated:{ 
        type: Date
    },
    comment: {
        type: String
    }
})

export default mongoose.model('authors', Authors, 'authors');