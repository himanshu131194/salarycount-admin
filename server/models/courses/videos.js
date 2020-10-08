import mongoose from 'mongoose'
import CONFIG from '../../../config';
const {DB} = CONFIG;

const Videos = new mongoose.Schema({
    courseId : {
        type: mongoose.Schema.ObjectId,
        ref: 'courses'
    },
    videos: {},
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

export default mongoose.model('videos', Videos, 'videos');