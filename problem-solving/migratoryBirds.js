// You have been asked to help study the population of birds migrating across the continent. 
// Each type of bird you are interested in will be identified by an integer value. 
// Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. 
// You would like to be able to find out which type of bird is most common given a list of sightings. 
// Your task is to print the type number of that bird and if two or more types of birds are equally common, 
// choose the type with the smallest ID number.

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let sorted = arr.sort();
    let min = sorted[0];
    let maxOccur = 1,
        counter = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
        if (counter > maxOccur) {
            min = sorted[i];
            maxOccur = counter;
        }
    }

    return min;
}