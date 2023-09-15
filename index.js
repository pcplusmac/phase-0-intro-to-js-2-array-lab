// Write your solution here!
const cats = ["Milo","Otis","Garfield"]; 

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
    newCats = [...cats,name];
    return newCats;
}

// A function to prepend the new element nondestructively
function prependCat(name){
    newCats = [name, ...cats];
    return newCats;

}