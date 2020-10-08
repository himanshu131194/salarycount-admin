import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Tags = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    count : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
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

export default mongoose.model('industries_tags', Tags);