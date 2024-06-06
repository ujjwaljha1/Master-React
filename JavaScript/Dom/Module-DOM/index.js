let StartBtn=document.querySelector(".start")
let countbtn=document.querySelector(".count")
let stopbtn=document.querySelector(".stop")
let input=document.querySelector(".input");

let value=0


StartBtn.addEventListener("click",()=>{
    console.log("Clicked")
})

StartBtn.addEventListener("click",()=>{
    if(StartBtn.innerText=="Start"){
        StartBtn.innerText="Begin";
        StartBtn.innerHTML='<span>Lets begin</span>'
    }else{
        StartBtn.innerText="Start";
    }
})

countbtn.addEventListener("click",()=>{
    value++;
    countbtn.innerText=(`Clicked ${value} this many times`);
    console.log(value);
})


stopbtn.addEventListener("click",()=>{
     //stopbtn.classList.add("btn.red");
    stopbtn.classList.toggle("btn-red")
})



// let input=document.querySelector(".input");
// input.addEventListener("change",()=>{
//     console.log(input.value);
// })


// let input=document.querySelector(".input");
// input.addEventListener("input",()=>{                //Tringered every time
//     console.log(input.value);
// })


// input.addEventListener("focus",()=>{
//     console.log(input.value);
// })


// let input=document.querySelector(".input");
// input.addEventListener("keyup",()=>{
//     console.log(input.value);
// })

// let input=document.querySelector(".input");
// input.addEventListener("change",()=>{
//     console.log(input.value);
// })



/** Mouse Events */

// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button)
// })
input.addEventListener("mousedown",(event)=>{
    let xcor=event.pageX;
    let ycor=event.pageY;
    let cors=`x cor -${xcor} and y cor-${ycor}`
    console.log(cors)
})

