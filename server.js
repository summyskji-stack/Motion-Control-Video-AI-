import express from "express"
import fetch from "node-fetch"
import multer from "multer"
import cors from "cors"

const app = express()

app.use(cors())

const upload = multer()

const HF_TOKEN = "YOUR_HUGGINGFACE_API_KEY"

app.post("/generate",
upload.single("image"),
async (req,res)=>{

const prompt = req.body.prompt

const response = await fetch(

"https://api-inference.huggingface.co/models/ali-vilab/i2vgen-xl",

{
method:"POST",

headers:{
Authorization:`Bearer ${HF_TOKEN}`,
"Content-Type":"application/json"
},

body:JSON.stringify({
inputs:prompt
})
})

const data = await response.arrayBuffer()

res.send(Buffer.from(data))

})

app.listen(3000)
