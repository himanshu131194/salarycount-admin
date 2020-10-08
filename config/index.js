export default {
   env : process.env.NODE_ENV || 'development',
   port : process.env.PORT || 8000,
   API_URL: "http://localhost:8000",
   // API_URL: "http://192.168.0.132:3000",
   // API_URL: "https://notinmood.com",
   // MONGO_URI : 'mongodb+srv://notinmood:notinmood123@cluster0-57jsn.mongodb.net/notinmood?retryWrites=true&w=majority',
   // mongodb+srv://salarycount:salarycount12345@cluster0.szwfu.mongodb.net/salarycount?retryWrites=true&w=majority
   MONGO_URI: "mongodb+srv://salarycount:salarycount12345@cluster0.szwfu.mongodb.net/salarycount?retryWrites=true&w=majority",
   COOKIEKEY: 'mycookiesecret',
   REDIS:{
      URL: "redis://127.0.0.1:6379"
   },
   DB:{
      DEFAULT_COUNT : 0,
      DEFAULT_CONTENT_TYPE : 1,  //1-images 2- videos
      DEFAULT_TRUE: true,
      DEFAULT_FALSE: false,
      DEFAULT_ACCOUNT_TYPE: 0, // -1 - ADMIN SIDE  0 - Normal , 1- Google, 2- Facebook
      GENDER:{
         MALE : 1,
         FEMALE: 2,
         OTHER: 3
      },
      BADGETS: {
         NOOBIE: 1,
         PRO: 2 
      },
      CRAWLED_TYPE : {
         DEFAULT : 0,
         FB : 1,
         GAG: 2
      },
      AGE_GROUP:{
         ONE : 1, //18 - 20
         TWO : 2, //20 - 30
         THREE : 3, //30 - 40
         FOUR : 4, //40 - 50+
      },
      LEVEL:{
         BEGINNER : 0, 
         INTERMEDIATE : 1, 
         ADVANCED : 2, 
      }
   },
   S3:{
      BUCKET : 'salarycount',
      URL : 'https://salarycount.s3.ap-south-1.amazonaws.com',
      ACCESS: 'AKIA3YIPQLXVWGII6REH',
      SECRET: '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'
   },
   LOGIN_KEYS:{
        GOOGLE:{
           CLIENT: '38122336055-7stkqff3vae90il94e1p12tp0pq26a4h.apps.googleusercontent.com',
           SECRET : 'Czvtwg5Is_ZZwdVPEwUAoR8c'
        }
   },
   MESSAGES : {    
      100 : "post has beeb added successfully",
      101: "section has been added successfully"
   },
   ERRORS : {
      100 : "something went wrong, please try to post again"
   },
   USER: {
       POST_TYPES :{
            UPLOADED : 1,
            LIKED: 2,
            COMMENTED: 3
       }
   },
   JWT_SECRET: "himanshu@1234",
   ACCESS_TOKEN : "0z6v8b4uua"
}
