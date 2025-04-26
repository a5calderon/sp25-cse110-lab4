/*
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}

ctrl + c to stop 
*/

const intervalID = setInterval(everySecond,1000);
function everySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}