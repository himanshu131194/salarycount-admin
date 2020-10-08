import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Companies = new mongoose.Schema({
    Name:{
        type: String,
        trim: true,
        lowercase: true
    },
    Rating:{
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    ShortName: {
        type: String,
        trim: true,
        lowercase: true
    },
    TotalEmployees:{
        type: String,
        trim: true,
        lowercase: true
    },
    UrlName:{
        type: String,
        trim: true,
        lowercase: true
    },
    CompanyId: {
        type: Number,
        unique: true
    },
    CompanyType:{
        type: String,
        trim: true,
        lowercase: true
    },
    CompanyReviewsLive:{
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    CompanySalaries:{
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    About:{
        type: String,
        trim: true,
        lowercase: true
    },
    Age:{
        type: String,
        trim: true,
        lowercase: true
    },
    HQCountry:{
        type: String,
        trim: true,
        lowercase: true
    },
    HQUrlName:{
        type: String,
        trim: true,
        lowercase: true
    },
    InterviewExperiencesLive:{
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    Logo:{
        type: String,
        trim: true,
        lowercase: true 
    },
    Locations: [{
        type: String,
        trim: true,
        lowercase: true 
    }],
    Headquaters: [{
        type: String,
        trim: true,
        lowercase: true 
    }],
    LocationCount: {
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    Industries: [{
        type: mongoose.Schema.ObjectId,
        ref: 'industries_types'
    }],
    Tags: [{ 
        type: mongoose.Schema.ObjectId,
        ref: 'industries_tags'
    }],
    CrawledSource:{
        type: String
    },
    Created: {
        type: Date,
        default: Date.now
    },
    Updated:{ 
        type: Date
    },
    Comment: {
        type: String
    }
})
// first_location: ["Stockholm", "Mumbai"]
// headquaters: "Stockholm"
// industries: [{UrlName: "analytics", Id: "4", Name: "Analytics"},…]
// industry_string: "Analytics,Research & Development"
// location_count: 112
// tags: [{Name: "Forbes Global 2000", UrlName: "forbesglobal2000"}, {Name: "MNC", UrlName: "mnc"}]
export default mongoose.model('companies', Companies, 'companies');