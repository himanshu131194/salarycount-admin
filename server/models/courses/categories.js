import mongoose from 'mongoose'
import CONFIG from '../../../config';
const {DB} = CONFIG;

const Categories = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    count : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    subCategory:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'sub_categories'
        }
    ],
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

export default mongoose.model('categories', Categories, 'categories');