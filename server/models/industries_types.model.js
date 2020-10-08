import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const industriesTypes = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    url: {
        type: String,
        lowercase: true,
        required: true
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

export default mongoose.model('industries_types', industriesTypes);