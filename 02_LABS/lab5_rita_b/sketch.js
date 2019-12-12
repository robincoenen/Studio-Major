/*
Example by Dan Shiffman:
https://www.youtube.com/watch?v=lIPEvh8HbGQ
*/


function setup(){
  // we are using p5.dom, so no canvas, just html
  noCanvas();

input = createInput("A long and windring road");
input.changed(processRita);


}

function processRita(){
  
  
  console.log(input.value());
  
  
  
}