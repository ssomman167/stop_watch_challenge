

const start=document.querySelector(".start")
const stopp=document.querySelector(".stop")
const resett=document.querySelector(".reset")
// document.querySelector(".showtime").innerHTML="hello"

start.addEventListener("click",startit)
stopp.addEventListener("click",stopit)
resett.addEventListener("click",reset)

let seconds=0
let interval=null



function timer(){
    seconds++

    let hrs=Math.floor(seconds/3600)
    let mins=Math.floor((seconds-hrs*3600)/60)
    let secs=seconds%60

    if(secs<=9)
    secs="0"+secs
    if(mins<=9)
    mins="0"+mins
    if(hrs<=9)
    hrs="0"+hrs
    console.log(interval)
    document.querySelector(".showtime").innerText=`${hrs}:${mins}:${secs}`

}

function startit(){
    if(interval==null)
    {
        interval=setInterval(timer, 1000);
    }
    
     
}

function stopit(){
    clearInterval(interval)
    interval=null
}

function reset(){
    clearInterval(interval)
    seconds=0
    interval=null
    document.querySelector(".showtime").innerText=`00:00:00`
}

