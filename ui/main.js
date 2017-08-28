the button
 var button = document.getElementById("counter");
var counter = 0
 // the counter
 var counter = document.getElementById("button-counter");

 // set the counter to 0
 counter.innerHTML = 0;

 // increment the counter by 1 everytime the user clicks on the button
 button.onclick = function()
 {
    counter.innerHTML++;
 };