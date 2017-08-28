the button
 var button = document.getElementById("counter");
var counter = 5
 // the counter
 

 // set the counter to 0
 

 // increment the counter by 1 everytime the user clicks on the button
 button.onclick = function()
 {
     counter=counter+1
     var span = document.getElementById('count')
    span.innerHTML=counter.toString()
 };