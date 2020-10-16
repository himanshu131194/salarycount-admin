
import mongoose from 'mongoose'
import Tags from '../models/courses/tags'
import Courses from '../models/courses/courses'
import Authors from '../models/courses/authors'
import Caterogies from '../models/courses/categories'
import subCaterogies from '../models/courses/sub_categories'
import Videos from '../models/courses/videos'
import CoursesLive from '../models/courses/courses_live'
import { v4 as uuidv4 } from 'uuid';



export default {
    listOfAllCourses: async (req, res)=>{
        const { offset:skip=0, limit=6, filters={} } = req.query;
        let filterObj = {}, sort = { total_videos_count: -1 };

        if(filters.sort){
           sort = filters.sort;
        }
        if(filters.condition){
           filterObj = { name : {$regex: "^" + filters.condition.searchKey.toLowerCase() + ".*"} };
        }

        try {
           const listCourses = await Courses.aggregate([
               { $match : {isCost: false} },
               {
                    $lookup: {
                        from: 'authors',
                        localField: 'authors',
                        foreignField: '_id',
                        as: 'authors'
                    }
                },
               { $sort: {_id : -1}},
               { $skip: +skip },
               { $limit: +limit },
           ]);
           res.send({
               data: listCourses
            //    count : totalProfiles
           })
        } catch (error) {
            res.send({
                error
            })
        }
    },
    
    listOfCategoriesAndSubcategories: async (req, res)=>{
        let { filters={} } = req.query;
        (typeof filters === 'string') && (filters = JSON.parse(filters))
        let filterObj = {};

        if(filters['condition']){
            console.log("filters")
            filters.condition.id && (filterObj._id = mongoose.Types.ObjectId(filters.condition.id) )
        }

        console.log(filterObj);
        try {
            //CATEGORIES 
            let categories = await Caterogies.aggregate([
                { $match: { }},
                { $project: { name: 1, count: 1 }}
            ]);
            //SUBCATEGORIES
            let [{ subCategories }] = await Caterogies.aggregate([
                { $match : filterObj },
                {
                     $lookup: {
                         from: 'sub_categories',
                         localField: 'subCategory',
                         foreignField: '_id',
                         as: 'subCategories'
                     }
                 },
                 {$project: { subCategories: 1 }}
            ]);
            console.log(categories);
            res.send({
                data: { categories, subCategories}
             //    count : totalProfiles
            })
        } catch (error) {
            console.log(error)
            res.send({
                error
            })
        }
    },

    updateCourses: async (req, res)=>{
        console.log(req.body)
        const { id } = req.body;
        //FIND COURSE 
        const preCourse = await Courses.findOne({_id: mongoose.Types.ObjectId(id)}).lean();
        // console.log(preCourse);
        const courseId = preCourse._id;
        //DELETE SOME 
        delete preCourse['created'];
        delete preCourse['_id'];
        delete preCourse['__v'];

        // const resultObj = preCourse;
        preCourse.title = (req.body.title);
        preCourse.description = (req.body.description);
        preCourse['totalReviews'] = parseInt(req.body.total_reviews);
        preCourse['rating'] = parseInt(req.body.rating);
        preCourse['keyPoints'] = req.body.key_points.split("#");
        preCourse.summary = req.body.teaser;
        preCourse['course'] = mongoose.Types.ObjectId(id);
        preCourse['s3Url'] = req.body.download_url;

        
        let isExist = await CoursesLive.findOne({ course:  mongoose.Types.ObjectId(id)});
        //SAVE TO LIVE COURSE
        if(!isExist){
            const coursesLive = new CoursesLive(preCourse);
            const coursesLiveResult = await coursesLive.save();
            
            return res.send({
                data: coursesLiveResult
            })
        }
        return res.send({data: null});
    },

    popUpCourseInfo: async (req, res)=>{
        const { id } = req.query;
        const preCourse = await Courses.findOne({_id: mongoose.Types.ObjectId(id)}).lean();  
        preCourse.download_id =  uuidv4();     
        return res.send({
            data: preCourse
        })
    }

}


// {
//     poster: {
//       thumb: {
//         url: 'https://salarycount.s3.ap-south-1.amazonaws.com/courses/posters/thumb/9c32606c-3707-4bff-9043-facd16bd60d8.png',
//         bucket: 'salarycount',
//         file: '9c32606c-3707-4bff-9043-facd16bd60d8.png',
//         path: 'courses/posters/thumb/9c32606c-3707-4bff-9043-facd16bd60d8.png'
//       },
//       original: {
//         url: 'https://salarycount.s3.ap-south-1.amazonaws.com/courses/posters/original/ddf3e556-16de-4914-bb0e-6b3634100f61.jpg',
//         bucket: 'salarycount',
//         file: 'ddf3e556-16de-4914-bb0e-6b3634100f61.jpg',
//         path: 'courses/posters/original/ddf3e556-16de-4914-bb0e-6b3634100f61.jpg'
//       }
//     },
//     authors: [ 5f7018dc6dd75df4e421b54c ],
//     totalHours: 7200,
//     level: 0,
//     totalLessons: 15,
//     tags: [ 5f7018e76dd75df4e421b77f ],
//     isCost: false,
//     totalSections: 4,
//     _id: 5f7018dc394f53932a0b48af,
//     page: 'https://tutsplus.com/courses#difficulty=beginner',
//     title: 'adobe xd for beginners',
//     courseUrl: '/adobe-xd-for-beginners',
//     summary: 'Want to learn how to use Adobe XD? Join Adi Purdila for this comprehensive Adobe XD tutorial, and learn about artboards, components, responsive design, and...',
//     courseCreated: '2020-09-17',
//     created: 2020-09-27T04:45:16.739Z,
//     __v: 0,
//     category: 5f7018e76dd75df4e421b759,
//     description: '<p>Want to learn how to use Adobe XD? Join Adi Purdila for this comprehensive Adobe XD tutorial, and learn about artboards, components, responsive design, and more.</p>\n' +
//       '\n' +
//       "<p>Adobe XD is the all-in-one UX/UI solution for designing websites, mobile apps, and more. It's quickly become a favorite among UI and UX designers because of its simple and intuitive UI, powerful features, and low barrier to entry.</p>\n" +
//       '\n' +
//       '<p>In this Adobe XD tutorial, you’ll learn everything you need to know about how to use Adobe XD. We’ll start by covering the basics like working with artboards, shapes, and images, and then move on to more advanced features like working with assets and creating responsive layouts. In the final chapter, we’ll also learn how to create an Adobe XD prototype and how to work with Adobe XD auto-animate.</p>\n' +
//       '\n' +
//       '<p><strong>Learn Adobe XD</strong></p>\n' +
//       '\n' +
//       `<p>We've built a comprehensive guide to help you learn <a href="https://webdesign.tutsplus.com/series/learn-adobe-xd--cms-1255" target="_blank" rel="noreferrer noopener">Adobe XD</a>, whether you're just getting started with UX design or you want to explore prototyping and collaboration. Also be sure to check out our separate course on <a href="https://webdesign.tutsplus.com/courses/beginner-to-advanced-with-adobe-xd-auto-animate" target="_blank" rel="noreferrer noopener">Adobe XD auto-animate</a>.</p>`,
//     lessons: 5f7018e7394f53932a0b48b0,
//     subCategory: 5f7018e76dd75df4e421b741
//   }


