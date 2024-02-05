const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const dotenv=require('dotenv')
const app=express()
const chr=require('./routes/chatrout')
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
    // Continue to the next middleware
    next();
  });
app.use(bodyparser.json());
dotenv.config()
app.use('/',chr)
app.listen(process.env.PORT,()=>{
    console.log(`listining in ${process.env.PORT}`)
})