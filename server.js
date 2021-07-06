const express = require('express') // require the express package
const app = express() // initialize your express app instance
app.use(express.json());

const cors = require('cors');
app.use(cors())

require('dotenv').config();

const axios = require('axios'); 

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/exam',{ useNewUrlParser: true, useUnifiedTopology: true });
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`server work on ${PORT}`);
})

const getDataFromApi =require('./controllers/api.controller')
app.get('/juice',getDataFromApi)


const {makeData,getData,deleteData,updateData}=require('./controllers/mongoose.controller')
app.post('/juice/fav',makeData)
app.get('/juice/fav',getData)
app.delete('/juice/fav/:slug',deleteData)
app.post('/juice/fav/:slug',updateData)