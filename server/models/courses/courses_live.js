import mongoose from 'mongoose'
import CONFIG from '../../../config';
const {DB} = CONFIG;

const CoursesLive = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        lowercase: true
    },
    authors: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'authors'
        }
    ],
    poster:{
        thumb:{ 
            url: { type: String},
            bucket: { type: String},
            file: { type: String},
            path: { type: String}
         },
        original:{ 
            url: { type: String},
            bucket: { type: String},
            file: { type: String},
            path: { type: String}
         }
    },
    summary:{
        type: String
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories'
    },
    subCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'sub_categories'
    },
    totalHours:{
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    level:{
        type:Number,
        default:CONFIG.DB.LEVEL.BEGINNER
    },
    totalLessons:{
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    tags: [{
        type: mongoose.Schema.ObjectId,
        ref: 'tags'
    }],
    description: {
        type: String
    },
    isCost: {
        type: Boolean,
        default: DB.DEFAULT_TRUE
    },
    courseCreated:{
        type: String
    },
    courseUrl:{
        type: String
    },
    totalSections:{
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    page:{
        type: String
    },
    lessons: {
        type: mongoose.Schema.ObjectId,
        ref: 'tags'
    },
    rating:{
        type: Number,
        default: DB.DEFAULT_COUNT
    },
    totalReviews:{
        type: Number,
        default: DB.DEFAULT_COUNT
    },
    downloadableResources:{
        type: Number,
        default: DB.DEFAULT_COUNT
    },
    keyPoints:[
        { type: String}
    ], 
    course:{
        type: mongoose.Schema.ObjectId,
        ref: 'courses'
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

export default mongoose.model('courses_live', CoursesLive, 'courses_live');