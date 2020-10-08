import coursesController from '../controllers/courses.controller'

export default (router)=>{
    
    router.get('/list-courses', coursesController.listOfAllCourses);

    router.get('/filters-list', coursesController.listOfCategoriesAndSubcategories);

    router.post('/update-courselive', coursesController.updateCourses);

    router.get('/popup-course', coursesController.popUpCourseInfo)

    return router;
}
