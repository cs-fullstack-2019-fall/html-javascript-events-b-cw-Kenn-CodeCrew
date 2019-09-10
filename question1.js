let textInputElement = document.querySelector("#textInput");
let textInputLabelElement = document.getElementById("textInputLabel");

textInputElement.onkeydown = function(e){
    // console.log(e.target.value);
    // textInputLabelElement = "Hello";
    textInputLabelElement.innerText = e.target.value;
};