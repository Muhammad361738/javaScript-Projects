let myGenNum =function (){
    let hex = "0123456789ABCDEF";
    let color ="#"
    for(i=0; i < 6; i++){
        color += hex[Math.floor(Math.random () * 16)]
    }
    return color
}
const start = document.querySelector(".str")
const stop = document.querySelector(".sto")
let mystop
if(!mystop){
start.addEventListener("click",()=>{
mystop = setInterval(() => {
    document.body.style.backgroundColor = myGenNum ()
    
}, 1000);

})
}

stop.addEventListener("click",()=>{
clearInterval(mystop);
})