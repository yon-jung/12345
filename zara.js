const box2Tag = document.querySelector("div.box2");

   
const rangeInputs = document.querySelectorAll("input");

rangeInputs.forEach( range => {
  range.addEventListener("input", function(){
      
    box2Tag.style.backgroundColor = `rgb(${rangeInputs[0].value}, ${rangeInputs[1].value}, ${rangeInputs[2].value})`;
      
  })
})




const buttons = document.querySelectorAll("div.button");

buttons.forEach(button =>{
  button.addEventListener("click", function(){
    button.classList.toggle("selected");
  })
})

const colorInputs = document.querySelectorAll("div.colors");
const text = document.querySelector("box2#result");

colorInputs[0].addEventListener("click", function(){
let textColor = this.style.color;  

button.style.color = textColor;
})

colorInputs.forEach(colorInput =>{
  colorInput.classList.remove("selected");
})
colorInput.classList.add("selected");


function printName() {
const name = document.getElementById('text').value;
document.getElementById("result").innerText = name;
button.classList.both("selected");


}



const resultTag = document.querySelector("box2.div#result");
const inputTag = document.querySelector("input[type ='range']");

inputTag.addEventListener("input", function(){
  console.log(inputTag.value);
  resultTag.style.fontSize = inputTag.value+"px";
})





const outputHeading = document.querySelector("box2.div#result");
const fontsizeInput = document.querySelector("div.size input[type ='range']");
const fontsizeLabel = document.querySelector("div.size label");


fontsizeInput.addEventListener("input", function(){
outputHeading.style.fontSize = this.value + "px";
fontsizeLabel.innerHTML = this.value + "px";
fontsizeLabel.innerHTML = `${this.value}px`;

})