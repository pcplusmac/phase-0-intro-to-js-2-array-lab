// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
   return cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const newCats = [...cats, "Broom"]
    console.log (newCats);
    return newCats
}

function prependCat(name) {
    const newCatsTwo = [name, ...cats];
    console.log (newCatsTwo);
    return newCatsTwo
}



function removeLastCat() {
   const newCatsThree = cats.slice(0,-1)
   return newCatsThree
}

function removeFirstCat(){
    const newCatsFour = cats.slice(1)
    return newCatsFour
}

console.log (removeLastCat())
