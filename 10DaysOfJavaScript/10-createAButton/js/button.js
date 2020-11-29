// The button's initial text label is 0. After each click, the button must increment by 1. 
// Recall that the button's text label is the JS object's innerHTML property.
var btn = document.getElementById("btn");

// Using addEventListener
// btn.addEventListener("click", function() {
//     var count = btn.innerHTML;
//     count++;
//     btn.innerHTML = count;
// })

// Using onClick
btn.onclick = function() {
    var count = btn.innerHTML;
    count++;
    btn.innerHTML = count;
}