import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import Template from './../template.js'
import postsRoutes from './routes/posts.routes'
import coursesRoutes from './routes/courses.routes'

import cors from 'cors'
// import './services/cache'

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json({limit: '10mb', extended: true}))

const CURRENT_WORKING_DIR = process.cwd();

app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')));

//comment out before building for production
import devBundle from './devBundle'
//comment out before building for production
devBundle.compile(app);

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/api', postsRoutes(express.Router()));
app.use('/api', coursesRoutes(express.Router()));


app.get('*', (req, res)=>{
  res.send(Template());
})

export default app;

