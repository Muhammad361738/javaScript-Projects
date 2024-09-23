const textArea = document.getElementById("textarea");

const totalChar = document.getElementById("totalchar");

const remaingChar = document.getElementById("remaingchar")

textArea.addEventListener("keyup", ()=>{
     wordCounting();
});

wordCounting();

function wordCounting (){
    totalChar.innerText = textArea.value.length
    remaingChar.innerText = textArea.getAttribute("maxlength") - textArea.value.length
}