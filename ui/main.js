the button
 var button = document.getElementById("button");

 // the counter
 var counter = document.getElementById("btn-counter");

 // set the counter to 0
 counter.innerHTML = 0;

 // increment the counter by 1 everytime the user clicks on the button
 btn.onclick = function()
 {
    counter.innerHTML++;
 };