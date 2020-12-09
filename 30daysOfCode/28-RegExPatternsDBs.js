// Day 28: RegEx, Patterns, and Intro to Databases
// Consider a database table, Emails, which has the attributes First Name and Email ID. 
// Given N rows of data simulating the Emails table, 
// print an alphabetically-ordered list of people whose email address ends in @gmailcom.

function main() {
    const N = parseInt(readLine(), 10);
    // Set array to push first names to
    let firstNames = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
        // Pushes emailID's with @gmail.com to array
        if(emailID.endsWith("@gmail.com"))
            firstNames.push(firstName);
    }
    // Organize and print
    firstNames.sort()
    firstNames.forEach(name => console.log(name));
}


