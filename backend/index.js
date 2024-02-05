const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const dotenv=require('dotenv')
const app=express()
const chr=require('./routes/chatrout')
app.use(cors());
app.use(bodyparser.json());
dotenv.config()
app.use('/',chr)
app.listen(process.env.PORT,()=>{
    console.log(`listining in ${process.env.PORT}`)
})