// Write your solution here!
const cats = ["Milo","Otis","Garfield"]; 

// Create the aray function to append the cat at the end position
function destructivelyAppendCat(name){
    
    cats.push(name);
}

// A function to add the new cat to array at the begginnig position
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// A function for removing the last cat
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
