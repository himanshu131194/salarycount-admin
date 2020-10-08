import postsController from '../controllers/posts.controller'

export default (router)=>{

    // router.get('/websites-categories', postsController.listOfAllWebsitesAndCategrories);

    // router.get('/categories-by-websites', postsController.listOfAllCategoriesFilteredByWebsites)

    // router.get('/videos-by-profile', postsController.listOfVideosByModels);

    // router.get('/profile-data', postsController.listOfProfileData);

    // router.post('/list-profiles', postsController.listOfProfiles);

    router.get('/fetch-filters', postsController.fetchCompaniesMetainfo);

    router.get('/list-companies', postsController.listAllCompanies);

    router.post('/crawl-courses', postsController.crawledCourses);

    router.post('/update-courses', postsController.updateCourses);

    router.post('/update-url', postsController.getSlugId);
    
    router.get('/get-slug', postsController.getSlug);
    
    router.get('/download-content', postsController.downloadContent);

    return router;
}

// https://cms-assets.tutsplus.com/cdn-cgi/image/width=400,height=400/uploads/users/71/courses/1367/preview_image/how-to-animate-a-landscape-painting-in-after-effects_400_277.jpg 400w
// , https://cms-assets.tutsplus.com/cdn-cgi/image/width=380,height=380/uploads/users/71/courses/1367/preview_image/how-to-animate-a-landscape-painting-in-after-effects_400_277.jpg 380w, https://cms-assets.tutsplus.com/cdn-cgi/image/width=190,height=190/uploads/users/71/courses/1367/preview_image/how-to-animate-a-landscape-painting-in-after-effects_400_277.jpg 190w, https://cms-assets.tutsplus.com/cdn-cgi/image/width=152,height=152/uploads/users/71/courses/1367/preview_image/how-to-animate-a-landscape-painting-in-after-effects_400_277.jpg 152w, https://cms-assets.tutsplus.com/cdn-cgi/image/width=76,height=76/uploads/users/71/courses/1367/preview_image/how-to-animate-a-landscape-painting-in-after-effects_400_277.jpg 76w