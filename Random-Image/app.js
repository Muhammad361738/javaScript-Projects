const imgContainer = document.querySelector(".container");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click", ()=>{
       imageNum = 6
       updateImage()
})


function updateImage(){
     for (let i = 0; i < imageNum ; i++){
    const newImg = document.createElement("img")
    newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
    //  newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}
  
    imgContainer.appendChild(newImg)
      }
}

// const imgContainer = document.querySelector(".container")
// const btnEl = document.querySelector(".btn")


// btnEl.addEventListener("click", ()=>{
//     // console.log("you clicked me!")
//     imgNum = 6
//     updateImg()
// })

// function updateImg(){
//     for(let i = 0; i < imgNum; i++){
//         const newImg = document.createElement("img")
//         newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
//         imgContainer.appendChild(newImg)
//     }
// }