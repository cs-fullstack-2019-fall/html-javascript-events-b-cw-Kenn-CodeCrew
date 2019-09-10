let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
let textInputElement = document.querySelector("#textInput");
let textInputLabelElement = document.getElementById("textInputLabel");
let totalString = "";
let index = 0;

textInputElement.onkeydown = function(e){
    totalString += codeCrewString[index];
    textInputLabelElement.innerText = totalString;
    index++;
};