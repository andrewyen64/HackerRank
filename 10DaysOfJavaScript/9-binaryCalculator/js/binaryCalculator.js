// Implement a simple calculator that performs the following operations on binary numbers: 
// - addition, subtraction, multiplication, and division. 
// Note that division operation must be integer division only.

function onButton(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById('res');
    
    switch(action) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML += action;
            break;
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            var expression = res.innerHTML;
            var nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivalents
            expression = expression.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // evaluate in base 10 and convert to base 2
            res.innerHTML = eval(expression).toString(2);
            break;
        default:
            console.error('should not be executed');
            break;
    }
}
var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}