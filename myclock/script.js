const myClock = document.getElementById("clock")

setInterval(()=>{
    let date = new Date () 
  myClock.innerHTML = date.toLocaleString()
},1000)