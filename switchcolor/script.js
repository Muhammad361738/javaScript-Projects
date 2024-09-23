const body = document.querySelector("body");

const btn = document.querySelectorAll('.button');

btn.forEach((button)=>{
    button.addEventListener("click", (chanColor)=>{
        if(chanColor.target.id === "blue"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "red"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "yellow"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "orange"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "green"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "black"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "purple"){
            body.style.backgroundColor = chanColor.target.id
        }
        if(chanColor.target.id === "brown"){
            body.style.backgroundColor = chanColor.target.id
        }
    })
})