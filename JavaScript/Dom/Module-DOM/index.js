let StartBtn=document.querySelector(".start")
let countbtn=document.querySelector(".count")
let stopbtn=document.querySelector(".stop")

let value=0


StartBtn.addEventListener("click",()=>{
    console.log("Clicked")
})

StartBtn.addEventListener("click",()=>{
    if(StartBtn.innerText=="Start"){
        StartBtn.innerText="Begin";
    }else{
        StartBtn.innerText="Start";
    }
})

countbtn.addEventListener("click",()=>{
    value++;
    countbtn.innerText=(`Clicked ${value} this many times`);
    console.log(value);
})


