const myDiv =document.querySelector("form")

myDiv.addEventListener("submit",(submission)=>{
    submission.preventDefault()

     const myHeight = parseInt(document.querySelector("#height").value)
     const myWeight = parseInt(document.querySelector("#weight").value)
     const myResult = document.querySelector(".result")
     
     if(myHeight === "" || myHeight < 0 ||  isNaN(myHeight)){
       myResult.innerHTML="Please inter a valid height"; 
    } else if(myWeight === "" || myWeight < 0 ||  isNaN(myWeight)){
        myResult.innerHTML="Please inter a valid Weight"; 
     }  else{
            const bmi = (myWeight/ ((myHeight * myHeight)/10000)).toFixed(2)
            myResult.innerHTML =` <span>${bmi}</span>`
          }
     







    //  } else if(myWeight === "" || myWeight < 0 ||  isNaN(myWeight)){
    //     myResult.innerHTML="Please inter a valid Weight";
    //   } 
    //   else{
    //     const bmi = (myWeight/(myHeight * myHeight)/10000).toFixed(2)
    //     myResult.innerHTML = <span>${bmi}</span>
    //   }
})