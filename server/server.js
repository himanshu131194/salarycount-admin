import CONFIG from './../config'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

mongoose.connect(CONFIG.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', ()=>{
	 throw new Error('unable to connect to database')
})


import app from './express'

app.listen(CONFIG.port, (err)=> {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', CONFIG.port)
})
