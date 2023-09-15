// Write your solution here!
const cats = ["Milo","Otis","Garfield"]; 

// Declare a variable to store then new cats array data. 
var newCats;

// Create the aray function to append the cat at the end position
function destructivelyAppendCat(name){
    
    cats.push(name);
}

// A function to add the new cat to array at the begginnig position
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// A function for removing the last element 
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

// A function for removeing the fist element 
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

// A function to append the new element nondestructively. 
function appendCat(name){
    // Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    newCats = [...cats,name];
    return newCats;
}

// A function to prepend the new element nondestructively
function prependCat(name){
    // Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    newCats = [name, ...cats];
    return newCats;

}

//  A funciton remoe the last element from newCat array non-destructively
function removeLastCat(){
    //  Remoe the last element from exsiting array with original array unchanged
    newCats = cats.slice(0,-1);
    return newCats
}