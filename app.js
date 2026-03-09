function showTool(tool){

document.querySelectorAll(".toolBox").forEach(box=>{
box.style.display="none"
})

if(tool==="motion"){
document.getElementById("motionTool").style.display="block"
}

if(tool==="text"){
document.getElementById("textTool").style.display="block"
}

if(tool==="talk"){
document.getElementById("talkTool").style.display="block"
}

}
