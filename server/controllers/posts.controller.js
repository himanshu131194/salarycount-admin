import IndustriesTypes from '../models/industries_types.model'
import Locations from '../models/locations.model'
import Ratingrange from '../models/rating_range.model'
import employeesCountRange from '../models/employees_count_range.model'
import Tags from '../models/courses/tags'
import Company from '../models/companies.model'

import Courses from '../models/courses/courses'
import Authors from '../models/courses/authors'
import Caterogies from '../models/courses/categories'
import subCaterogies from '../models/courses/sub_categories'
import Videos from '../models/courses/videos'


const path = require('path')


import mongoose from 'mongoose'
import CONFIG from '../../config';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import AWS, { Pricing } from 'aws-sdk'
import request from 'request';
import rp from 'request-promise'
import _ from 'lodash'

import download from 'image-downloader'

// import { countReset } from 'console'

const s3 = new AWS.S3({
    accessKeyId: CONFIG.S3.ACCESS,
    secretAccessKey: CONFIG.S3.SECRET,
    region: 'ap-south-1'
});

const uploadToS3 = async (externalUrl=null, data64=null, path='uploads', uploadType=null)=>{
    console.log('s3-upload');
    try{
        let result = null, base64 = null, mime = null, ext = null;
        let listOfSupportedExtns = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4'];
        if(data64){
                result = Buffer.from(data64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
                ext = req.body.ext;
        }else{
                try {
                    console.log("externalUrl-", externalUrl);
                    result = await rp({url: externalUrl, encoding: null});
                    console.log("result-", result)
                } catch (error) {
                  console.log("eror in repsonce promsie")
                  console.log(error);
                }
                let buff = new Buffer(result);
                    ext = (externalUrl).split('.').pop();
                    base64 = `data:image/${ext};base64,`+buff.toString('base64');
        }
        const slugId = uuidv4();
        ext = listOfSupportedExtns.indexOf(ext)<0 ? 'jpg': ext;
        const base64Data = result;
        const type = uploadType==='video'? `video/mp4` : `image/${ext}`;
        // const key = `${path}/${moment().format('DD-MM-YYYY')}/${slugId}.${ext}`;
        const key = uploadType==='video'? `${path}/${slugId}.mp4` : `${path}/${slugId}.${ext}`;
        const params = {
              Bucket: CONFIG.S3.BUCKET,
              Key: key,
              Body: base64Data,
              ContentType: type
        }
        let s3Result = null;
        if(uploadType==='video'){
            // s3Result = s3.upload(params);
            // s3Result.on('httpUploadProgress', function (progress) {
            //     console.log(progress.loaded + " of " + progress.total + " bytes");
            // });
            // s3Result.send();
            fs.writeFileSync(`${path}/${slugId}.mp4`, result);
        }else{
            s3Result = await s3.putObject(params).promise();
        }
        console.log({
            url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
            key: key,
            slug: slugId,
            mime: type,
            path: key,
            bucket: CONFIG.S3.BUCKET,
            ext
        });
       return {
            s3_url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
            slug_id : slugId,
            mime: type,
            bucket: CONFIG.S3.BUCKET,
            path: key,
            ext
       }
    }catch(e){
        console.log(e);
        return {
            s3_url : `https://salarycount.s3.ap-south-1.amazonaws.com/company/logos/company-placeholder.svg`,
            slug_id : null,
            mime: null,
            bucket: CONFIG.S3.BUCKET,
            path: key,
            ext: null
        }
    }
}

export default {

    downloadContent : async (req, res)=>{
        let {content_url='https://www.w3schools.com/images/myw3schoolsimage.jpg'} =  req.query;
        try{
            let content = await rp({
                uri: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/71/courses/659/preview_image/a-beginners-guide-to-using-woocommerce-400x277.jpg',
                encoding: null
            });
            res.status(200).send(content)
         }catch(e){
            res.status(400).send({
                error : e   
            })
         }
    },

    getSlug: async (req, res)=>{
        let posters = await Courses.aggregate([
            { $match: { level: 2 }},
        ]);
        res.send({
            data: posters
        });
        // let ids = ['5f7019656dd75df4e421d09a', '5f7019326dd75df4e421c6bc', '5f7019126dd75df4e421c0f3', '5f7019086dd75df4e421bf4a', '5f7018fd6dd75df4e421bc3e', '5f7018f26dd75df4e421b98f', '5f7018dc6dd75df4e421b54c'];
        // for(let x of ids){
        //     const post = await Authors.findById(mongoose.Types.ObjectId(x));  
        //     let poster = {};

        //     poster.original = post.poster.thumb;
        //     poster.thumb = post.poster.original;

        //     let updated = await Authors.findOneAndUpdate({ _id: post._id }, { poster }, { new : true });

        //     console.log(updated);
        // }
        // console.log("DONE");
    },


    getSlugId: async (req, res)=>{
        console.log(req.body);

        const slugId = uuidv4();
        const post = await Courses.findById(mongoose.Types.ObjectId(req.body.id));
        let poster = {};

        poster.original = post.poster.original;

        poster.thumb = {
            url: `https://salarycount.s3.ap-south-1.amazonaws.com/courses/posters/thumb/${slugId}.${req.body.ext}`,
            bucket: `salarycount`,
            file: `${slugId}.${req.body.ext}`,
            path: `courses/posters/thumb/${slugId}.${req.body.ext}`
        }

        let updated = await Courses.findOneAndUpdate({ _id: post._id }, { poster }, { new : true });

        console.log(updated);

        res.send({
            data: slugId
        })
    },

    updateLessonsTitles : async (req, res)=>{
        console.log(req.body);
        const { data, page } = req.body;

        let courseUrl = "/"+data.course_url.split("/").pop();


        const isAlredyThr = await Courses.findOne({ courseUrl , totalHours: data.total_time })

        console.log(isAlredyThr);

        if(isAlredyThr){
            return res.send(isAlredyThr)
        }
    },
    
    crawledCourses: async (req, res)=>{
        console.log(req.body);
        const { data, page } = req.body;

        const isAlredyThr = await Courses.findOne({ title: data.title, courseCreated: data.course_created, totalHours: data.total_time })

        console.log(isAlredyThr);

        if(isAlredyThr){
            return res.send(isAlredyThr)
        }
        // page: 'https://tutsplus.com/courses',
        // data: {
        // //   free: true,
        // //   title: "a beginner's guide to using woocommerce",
        // //   course_url: 'https://webdesign.tutsplus.com/courses/a-beginners-guide-to-using-woocommerce',
        // //   poster_thumb: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/71/courses/659/preview_image/a-beginners-guide-to-using-woocommerce-400x277.jpg',
        //   course_created: '2020-08-20',
        //   total_time: '1.5',
        //   author: 'rachel mccollin',
        //   author_thumb: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/227/profiles/1328/profileImage/rachel-mccollin-jan2015-tutsplus.jpg',
        //   author_original: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=76,height=76/uploads/users/227/profiles/1328/profileImage/rachel-mccollin-jan2015-tutsplus.jpg',
        //   author_url: 'https://tutsplus.com/authors/rachel-mccollin'
        // }


        let getAuthor = async (author, author_url, author_thumb, author_original)=>{
            // let authorThumb = (await uploadToS3(author_thumb, null, 'courses/authors/thumb'));
            // let authorOriginal = (await uploadToS3(author_original, null, 'courses/authors/original'));
            let result = await Authors.findOneAndUpdate({ 
                name: author.trim(),
                url: author_url
            }, { 
                poster:{
                    thumb : {
                        url: author_thumb,
                        bucket: '',
                        file: '',
                        path: ''
                    },
                    original: {
                        url: author_original,
                        bucket: '',
                        file: '',
                        path: ''
                    }
                },
                $inc: { coursesCount: 1 } 
            }, { new: true, upsert: true });
            return [result._id];
        }

        let courseUrl = "/"+data.course_url.split("/").pop();
        // let posterThumb = await uploadToS3(data.poster_thumb, null, 'courses/posters/thumb');
        let course_data = {
            page,
            isCost: data.free,
            title: data.title.trim(),
            courseUrl,
            summary: data.post_teaser.trim(),
            poster:{
                thumb:{ 
                    url: data.poster_thumb,
                    bucket: '',
                    file: '',
                    path:''
                 },
                original:{ 
                    url: '',
                    bucket: '',
                    file: '',
                    path: ''
                 }
            },
            level:2,
            courseCreated: data.course_created,
            totalHours: data.total_time,
            authors: await getAuthor(data.author, data.author_url, data.author_thumb, data.author_original)
        }

        let course = new Courses(course_data);
        let result = await course.save();

        console.log(result);
        res.send(result)
    },

    updateCourses : async (req, res)=>{
        console.log(req.body);
        const { course } = req.body;

        let updateCategories = async (category, sub_category)=>{
            if(!category){ return category }

            const addNewsubCategory = await subCaterogies.findOne({name: sub_category.trim()});

            const updated = await Caterogies.findOneAndUpdate({ name: category.trim() }, {
                $inc: { count: 1 },
            }, { upsert: true , new: true});

            const isSubCategory = await Caterogies.findOne({ name: category, subCategory: {$in: mongoose.Types.ObjectId(addNewsubCategory._id) } })
            
            if(!isSubCategory){
                await Caterogies.findOneAndUpdate({ _id: updated._id }, {
                    $push: { subCategory: mongoose.Types.ObjectId(addNewsubCategory._id) } 
                }, { upsert: true , new: true});
            }

            return updated._id;
        }

        let updatesubCategories = async (sub_category)=>{
            if(!sub_category){ return sub_category }
            const updated = await subCaterogies.findOneAndUpdate({ name: sub_category.trim() }, {
                $inc: { count: 1 }
            }, { upsert : true , new : true });
            return updated._id;
        }

        let updateTags = async (tags)=>{
            if(tags.length==0){
                return []
            };
            let k = [];
            for(let x of tags){
                const updated = await Tags.findOneAndUpdate({ name: x.trim() }, {
                    $inc: { count: 1 }
                }, { upsert : true , new: true});
                k.push(updated._id);
            }
            return k;
        }

        const isExits = await Courses.findById(mongoose.Types.ObjectId(req.body.course_id));
        let posterOriginal = await uploadToS3(req.body.poster_original, null, 'courses/posters/original');
        let poster = Object.assign(isExits.poster, {
            original:{ 
                url: posterOriginal.s3_url,
                bucket: posterOriginal.bucket,
                file: posterOriginal.slug_id+"."+posterOriginal.ext,
                path: posterOriginal.path
             }
        });

        //UPDATE AUTHORS
        let updateAuthors = await Authors.findOneAndUpdate({_id: mongoose.Types.ObjectId((isExits.authors)[0])},{
            about: req.body.author_bio.trim()
        },{ new : true });
        

        //UPDATE VIDEOS 
        const videos = new Videos({
            course_id: mongoose.Types.ObjectId(isExits._id),
            videos: req.body.lessons
        }); 
        const videosResult = await videos.save();

        const result = await Courses.findOneAndUpdate({_id: isExits._id},{
            description: req.body.course.description? req.body.course.description.trim() : '',
            totalLessons: parseInt(req.body.course.total_lessons),
            totalSections: Object.keys(req.body.lessons).length,
            poster,
            subCategory: await updatesubCategories(req.body.course.sub_category),
            category: await updateCategories(req.body.course.category, req.body.course.sub_category),
            tags: await updateTags(req.body.course.tags),
            lessons: videosResult._id
        },{ new: true });


        return res.send({
            result
        })

        // if(isExits){
        //     console.log(isExits)
        // }

    },
    updateOnlyVideos : async (req, res)=>{
        console.log(req.body);
        const { course } = req.body;

        const isExits = await Courses.findById(mongoose.Types.ObjectId(req.body.course_id));

        //UPDATE VIDEOS 
        const videos = new Videos({
            course_id: mongoose.Types.ObjectId(isExits._id),
            videos: req.body.lessons
        }); 

        const videosResult = await videos.save();

        const result = await Courses.findOneAndUpdate({_id: isExits._id},{
            lessons: videosResult._id
        },{ new: true });

        return res.send({
            result
        });
        
    },
    // {
    //     course_id: '5f6b60d304e4403ec5ac0fde',
    //     course: {
    //       tags: [ 'javascript', 'react', 'static websites', 'graphql', 'gatsby' ],
    //       category: 'code',
    //       sub_category: 'javascript',
    //       total_lessons: '1.2 hours',
    //       description: '<p>Gatsby is a static-site generator that lets you build data-driven websites that are blazing fast. Behind the scenes, Gatsby uses React, and GraphQL to let you pull data from any data source.</p>\n' +
    //         '\n' +
    //         '<p>Join Jeremy McPeak as he teaches you how to get started with Gatsby. Follow along and build a simple app from start to finish, complete with a GraphQL data source.</p>\n'
    //     },
    //     poster_original: 'https://embed-fastly.wistia.com/deliveries/2fabd0cbdefa5884ce47b69fd8bbe75d.webp?image_crop_resized=960x540',
    //     lessons: {
    //       chapter_1: {
    //         title: 'introduction',
    //         total_time: '08:16',
    //         total_lessons: '2',
    //         lessons: [Array]
    //       },
    //       chapter_2: {
    //         title: 'basic concepts',
    //         total_time: '24:50',
    //         total_lessons: '3',
    //         lessons: [Array]
    //       },
    //       chapter_3: {
    //         title: 'working with data',
    //         total_time: '33:22',
    //         total_lessons: '4',
    //         lessons: [Array]
    //       },
    //       chapter_4: {
    //         title: 'conclusion',
    //         total_time: '03:36',
    //         total_lessons: '1',
    //         lessons: [Array]
    //       }
    //     },
    //     author_bio: "I started my development career on the client-side writing JavaScript and DHTML components in my spare time. In 2005, Nicholas C. Zakas asked me to join him in writing the first edition of Professional Ajax for Wiley Publishing. Since Professional Ajax, 1st Edition, I've been blessed to take part in other book projects: Professional Ajax 2nd Edition, and Beginning JavaScript 3rd and 4th editions."
    //   }


    // listOfProfileData: async (req, res)=>{
    //     const { model } = req.query;
    //     let categories = [], websites = [];

    //     if(model){
    //         const videos = await Videos.aggregate([
    //             { $match: { $expr : { $in : [ mongoose.Types.ObjectId(model), '$profiles' ] } } } 
    //         ]);
    //         for(let video of videos){
    //             categories = [...categories, ...video.categories];
    //             websites = [...websites, ...video.websites];
    //         }
    //         websites = _.uniq(websites);
    //         categories = _.uniq(categories);
    //     }else{
    //         categories = await Categories.aggregate([
    //             { $match: {}},
    //             { $sort: { videos_count: -1 } }
    //         ]).cache({ key: 'allcategories'});
    //         websites = await Websites.aggregate([
    //             { $match: {}},
    //             { $sort: { videos_count: -1 } }
    //         ]).cache({ key: 'allwebsites'});
    //     }
    //     res.send({
    //         data : { websites, categories }
    //     })
    // },

    // listOfVideosByModels : async (req, res)=>{
    //     console.log(req.query);
    //     let { offset: skip , limit, filters } = req.query;
    //     console.log(filters);
    //     let sort = { _id: -1 }, model = null, videoFilterPipeline = [];
    //     filters = JSON.parse(filters);

    //     if(filters.sort){
    //        sort = filters.sort;
    //     }
    //     if(filters.condition){
    //         model = filters.condition.model || null;
    //     }

    //     const filterObj = model ? { $expr : { $in : [ '$$profile_id', '$profiles' ] } }: {};        
    //     if(filters.condition.category.length>0 && filters.condition.website.length==0){
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $match: { categories : { $all: filters.condition.category }} },
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }else if(filters.condition.website.length>0 && filters.condition.category.length==0){
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $match: { websites : { $all: filters.condition.website }} },
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }else if(filters.condition.website.length==0 && filters.condition.category.length==0){
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }else{
    //         videoFilterPipeline = [
    //             { $match: filterObj},
    //             {
    //                 $lookup: {
    //                     from: 'profiles',
    //                     localField: 'profiles',
    //                     foreignField: '_id',
    //                     as: 'profiles'
    //                 }
    //             },
    //             { $match: { $and : [ { websites : { $all: filters.condition.website }}, { categories : { $all: filters.condition.category }}] }},
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit },
    //         ]
    //     }
    //     let data;
    //     if(model){
    //         data = await Profiles.aggregate([
    //             { $match: { _id : mongoose.Types.ObjectId(model)} },
    //             {
    //                 $lookup:{
    //                     from: "videos",
    //                     let : { profile_id: '$_id' },
    //                     pipeline: videoFilterPipeline,
    //                     as: 'videos'
    //                 }
    //             }
    //         ]);
    //     }else{
    //         data = await Videos.aggregate(videoFilterPipeline);
    //     }

    //     res.send({
    //         data
    //     })
    // },

    // listOfProfiles : async (req, res)=>{
    //      console.log(req.body);
    //      const { offset:skip , limit, filters } = req.body;
    //      let filterObj = {}, sort = { videos_count: -1 };

    //      if(filters.sort){
    //         sort = filters.sort;
    //      }
    //      if(filters.condition){
    //         filterObj = filters.condition
    //      }
    //      try {
    //         const totalProfiles = await Profiles.count();
    //         const profiles = await Profiles.aggregate([
    //             { $match: filterObj},
    //             { $sort: sort},
    //             { $skip: +skip },
    //             { $limit: +limit }
    //         ]);
    //         res.send({
    //             data: profiles,
    //             count : totalProfiles
    //         })
    //      } catch (error) {
    //          res.send({
    //              error
    //          })
    //      }
    // },

    // listOfAllWebsitesAndCategrories: async (req, res)=>{
    //     const allCategories = await Categories.aggregate([
    //         { $match: {}},
    //         { $sort: { videos_count: -1 }}
    //     ]);
    //     const allWebsites = await Websites.aggregate([
    //         { $match: {}},
    //         { $sort: { videos_count: -1 }}
    //     ]);
    //     res.send({
    //         data: { categories: allCategories, websites: allWebsites }
    //     })
    // },

    // listOfAllCategoriesFilteredByWebsites: async (req, res)=>{
    //     const { website } = req.query;
    //     const allCategories = await Videos.aggregate([
    //         { $match: { websites: { $in: [website.trim()] } }},
    //         { $project: { categories: 1 }}
    //     ]);
    //     let uniqueCategories = {}, selectedCategories = [], count=0;
    //     for(let category of allCategories){
    //         let { categories, _id } = category;
    //         for(let x of categories){
    //             uniqueCategories[x] ? ++uniqueCategories[x]: (uniqueCategories[x] = 1)
    //         }
    //     }
    //     for(let k in uniqueCategories){
    //         selectedCategories.push({
    //             _id: ++count,
    //             name : k,
    //             videos_count: uniqueCategories[k]
    //         })
    //     }
    //     res.send({
    //         data: { categories: selectedCategories }
    //     })
    // },

    // listVideos: async (req, res)=>{
    //     const {limit=10, offset:skip=0} = req.query;
    //     let filterObj = {}, sort= { _id: -1 };
    //     const videos = await Videos.aggregate([
    //         { $match: filterObj},
    //         { $sort: sort},
    //         { $skip: +skip },
    //         { $limit: +limit }
    //     ]);
    //     res.send({
    //         data : videos
    //     })
    // },

    fetchCompaniesMetainfo: async (req, res)=>{
        // const ambitionBox = `https://www.ambitionbox.com/api/v2/companyListingFilters?type=all`;
        // const {data: { employee_count_range }} = await rp({ 
        //     uri: ambitionBox,
        //     json: true
        // });

        // for(let x of employee_count_range){
        //     let ind = new employeesCountRange({
        //         name: x.Name,
        //         url: x.UrlName,
        //         count: x.count
        //     })
        //     let result = await ind.save();
        //     console.log(result);
        // }
        // res.send({ result : "completed" })

        let counter = 15732;
        let callit = async ()=>{
            ++counter;
            console.log(`https://www.ambitionbox.com/api/v2/companyListingInfo?page=${counter}&sort=popularity`);
            const companiesInfo = `https://www.ambitionbox.com/api/v2/companyListingInfo?page=${counter}&sort=popularity`;
            const {data: { listing }} = await rp({ 
                uri: companiesInfo,
                json: true
            });
            if(listing && listing.length>0){
                //UPDATE DB
                let getInsdustries = async (result)=>{
                    if(result.length==0){
                        return result
                    }
                    let industries = [];
                    for(let x of result){
                        let isExists = await IndustriesTypes.findOne({name: x.Name});
                        if(isExists){
                            industries.push(isExists._id);
                        }
                    }
                    return industries;
                }
                let getTags = async (result)=>{
                    if(result.length==0){
                        return result
                    }
                    let tags = [];
                    for(let x of result){
                        let isExists = await Tags.findOne({name: x.Name});
                        if(isExists){
                            tags.push(isExists._id);
                        }
                    }
                    return tags;
                }
                let no = 1;
                for(let company of listing){
                    ++no;
                    // console.log(company);
                    let isExists = await Company.findOne({ CompanyId: company.CompanyId});
                    if(isExists){
                        continue;
                    }else{
                        let logoURL;
                        if(!company.Logo || company.Logo==""){
                           logoURL = "https://salarycount.s3.ap-south-1.amazonaws.com/company/logos/company-placeholder.svg";
                        }else{
                           logoURL = (await uploadToS3(`https://static.ambitionbox.com/alpha/company/photos/logos/${company.Logo}.jpg`, null, 'company/logos')).s3_url;
                        }
                        let record = new Company({
                            Name: company.Name,
                            Rating: company.Rating,
                            ShortName: company.ShortName,
                            CompanyId: company.CompanyId,
                            Age: company.Age,
                            About: company.About,
                            CompanyReviewsLive: company.CompanyReviewsLive,
                            CompanySalaries: company.CompanySalaries,
                            CompanyType: company.CompanyType,
                            HQCountry: company.HQCountry,
                            HQUrlName: company.HQUrlName,
                            InterviewExperiencesLive: company.InterviewExperiencesLive,
                            Logo: logoURL,
                            TotalEmployees: company.TotalEmployees,
                            UrlName: company.UrlName,
                            Locations: company.first_location,
                            Headquaters: company.headquaters=="" ? []: company.headquaters.toLowerCase(),
                            LocationCount: company.location_count,
                            Industries: company.industries? await getInsdustries(company.industries): [],
                            Tags: company.tags? await getTags(company.tags): [],
                            CrawledSource: `${companiesInfo}&no=${no}`
                        });
                        try {
                            let res = await record.save();
                            console.log(res);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
                await callit();
            }
        }
        await callit();
        res.send({ result: "completed"});
    },

    listAllCompanies: async (req ,res)=>{
        let result = await Company.aggregate([
            {$match: {} },
            {$sort: { _id: -1 }},
            // {$sort: { created: -1}},
            {$limit: 10}
        ]);
        res.send({
            data: result
        })
    }


    // About: "WNS (Holdings) Limited (NYSE: WNS), is a leading Business Process Management (BPM) company. We combine our deep industry knowledge with technology and analytics expertise to co-create innovative, digital-led transformational solutions with clients across 10 industries. We enable businesses in Travel, Insurance, Banking and Financial Services, Manufacturing, Retail and Consumer Packaged Goods, Shipping and Logistics, Healthcare, and Utilities to re-imagine their digital future and transform their outcomes with operational excellence.↵We deliver an entire spectrum of BPM services in finance and accounting, procurement, customer interaction services and human resources leveraging collaborative models that are tailored to address the unique business challenges of each client. We co-create and execute the future vision of 350+ clients with the help of our 41,000+ employees. Our global footprint spans 16 countries with 60 delivery centers worldwide including in China, Costa Rica, India, the Philippines, Poland, Romania, South Africa, Spain, Sri Lanka, Turkey, United Kingdom and the United States."
    // Age: 24
    // CompanyId: 2237
    // CompanyReviewsLive: 2945
    // CompanySalaries: 20404
    // CompanyType: "Private"
    // HQCountry: "India"
    // HQUrlName: "mumbai"
    // InterviewExperiencesLive: 21
    // Logo: "wns-global-services"
    // Name: "WNS"
    // Rating: 3.69
    // ShortName: "WNS"
    // TotalEmployees: "10000+"
    // UrlName: "wns"
    // first_location: ["Mumbai", "Chennai"]
    // headquaters: "Mumbai"
    // industries: [{UrlName: "bpo-or-kpo", Id: "10", Name: "BPO/KPO"}]
    // 0: {UrlName: "bpo-or-kpo", Id: "10", Name: "BPO/KPO"}
    // industry_string: "BPO/KPO"
    // // location_count: 15
    // tags: [{Name: "MNC", UrlName: "mnc"}]


}




// https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/71/courses/1253/preview_image/wordpress-seo-without-plugins-400x277.png 400w, 
// https://cms-assets.tutsplus.com/cdn-cgi/image/width=380,height=380/uploads/users/71/courses/1253/preview_image/wordpress-seo-without-plugins-400x277.png 380w, 
// https://cms-assets.tutsplus.com/cdn-cgi/image/width=190,height=190/uploads/users/71/courses/1253/preview_image/wordpress-seo-without-plugins-400x277.png 190w, 
// https://cms-assets.tutsplus.com/cdn-cgi/image/width=152,height=152/uploads/users/71/courses/1253/preview_image/wordpress-seo-without-plugins-400x277.png 152w, 
// https://cms-assets.tutsplus.com/cdn-cgi/image/width=76,height=76/uploads/users/71/courses/1253/preview_image/wordpress-seo-without-plugins-400x277.png 76w
