// Complete the function in the editor. It has one parameter: an array, a, of objects. 
// Each object in the array has two integer properties denoted by x and y. 
// The function must return a count of all such objects 'o' in array 'a' that satisfy o.x == o.y.

// 1st Solution using for loop
function getCount(objects) {
    var count = 0;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }
    return count;
}

// Filter Method Solution
function getCount(objects) {
    return objects.filter(function(o){return o.x == o.y}).length
}

// ES6+ Filter Solution
const getCount = objects => objects.filter(o => o.x == o.y).length