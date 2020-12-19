// Sam is a professor at the university and likes to round each student's  according to these rules:
// - If the difference between the grade and the next multiple of 5 is less than 3, 
//   round grade up to the next multiple of 5.
// - If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
    // Write your code here
    return grades.map(n => {
        let diff = 5 - (n % 5); // difference between grade and the next multiple of 5
        if (diff < 3 && n >= 38) { // checks if grade should round up
            n += diff;
        }
        return n;
    })

}
