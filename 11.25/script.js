// const heading = document.querySelector('.title');
// const shineElement = document.createElement('div');
// shineElement.setAttribute('class', 'box');
const myDiv = document.querySelector('#hover');
myDiv.style.border = "1px solid #000";
myDiv.style.backgroundColor = "green";
myDiv.style.position = "absolute";
myDiv.style.padding = "10%";
myDiv.style.margin = "auto";
myDiv.style.width = "200px"
myDiv.style.height = "200px";
myDiv.style.textAlign = "center";
myDiv.style.fontFamily = "consolas";
myDiv.style.fontSize = "40px";
myDiv.style.boxShadow = "10px 10px 5px #0f6b04";
myDiv.style.transition = ".9s";

myDiv.addEventListener("mouseenter", function(){
    console.log("You entered your mouse in box");
    myDiv.style.backgroundColor = "yellow"; 
    myDiv.style.width = "190px";
    myDiv.style.height = "190px";
    myDiv.style.color = "#000";
    myDiv.style.boxShadow = "10px 10px 5px orange";
})
myDiv.addEventListener("contextmenu", function () {
  console.log("you have opened your context menu (aka mouse 2)");
  myDiv.style.backgroundColor = "cyan";
  myDiv.style.color = "#000";
  myDiv.style.boxShadow = "10px 10px 5px #017d5e";
  myDiv.style.borderRadius = "50%";
});
myDiv.addEventListener("mouseleave", function() {
  console.log("You left your mouse from box");
  myDiv.style.width = "200px";
  myDiv.style.height = "200px";
  myDiv.style.backgroundColor = "blue";
  myDiv.style.color = "#fff";
  myDiv.style.boxShadow = "10px 10px 5px #01113b";


});
myDiv.addEventListener("dblclick", function () {
  console.log("You double clicked your mouse in box");
  myDiv.style.backgroundColor = "purple";
  myDiv.style.height = "100px"
  myDiv.style.width = "100px";
  myDiv.style.color = "#fff";
  myDiv.style.boxShadow = "10px 10px 5px #52025e";

});
// myDiv.addEventListener("mousemove", function () {
//   console.log("You're mouse is moving in the box");
//   myDiv.style.backgroundColor = "red";
// });
