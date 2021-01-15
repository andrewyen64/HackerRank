// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, 
// and for mouse C.

// Complete the function catsAndMouse to return the appropriate answer to each query, which will be printed on a new line.
// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.


function catAndMouse(x, y, z) {
    let catA = Math.abs(z - x)
    let catB = Math.abs(z - y)

    if (catA < catB) {
        return "Cat A"
    } else if (catB < catA) {
        return "Cat B"
    } else {
        return "Mouse C"
    }
}