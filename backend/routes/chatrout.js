const express=require('express')
const dotenv=require('dotenv')
const OpenAI = require("openai");
dotenv.config()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const router=express.Router()
router.post('/chat',async(req,res)=>{
    const {prompt}=req.body
    try {
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.send({ data: response.choices[0].text });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports=router