const API_KEY="hf_JTur5OOlOvJDmlD02H3b2j7xHOECtGxBhpxzfqeCL4C2gpplwAqNXw4zSg79T5o"


async function generateMotion(){

const file=document.getElementById("motionImage").files[0]
const prompt=document.getElementById("motionPrompt").value

const reader=new FileReader()

reader.onload=async function(){

const img=reader.result.split(",")[1]

const response=await fetch(
"https://api-inference.huggingface.co/models/ali-vilab/i2vgen-xl",
{
method:"POST",
headers:{
Authorization:"Bearer "+API_KEY,
"Content-Type":"application/json"
},

body:JSON.stringify({
inputs:{
image:img,
prompt:prompt
}
})
})

const blob=await response.blob()

const url=URL.createObjectURL(blob)

document.getElementById("motionResult").src=url

}

reader.readAsDataURL(file)

}



async function generateTextVideo(){

const prompt=document.getElementById("textPrompt").value

const response=await fetch(
"https://api-inference.huggingface.co/models/damo-vilab/text-to-video-ms-1.7b",
{
method:"POST",
headers:{
Authorization:"Bearer "+API_KEY,
"Content-Type":"application/json"
},

body:JSON.stringify({
inputs:prompt
})
})

const blob=await response.blob()

const url=URL.createObjectURL(blob)

document.getElementById("textResult").src=url

}



async function generateTalking(){

alert("Talking photo API connect karo (D-ID / SadTalker)")
}
