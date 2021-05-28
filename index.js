// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}


function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
   }


function prependCat(name) {
    const newerCats = [name, ...cats];
    return newerCats;
   }


function removeFirstCat(){
    const newestCats = cats.slice(1);
    return newestCats;
   }


function removeLastCat(){
    const otherCats = cats.slice(0, cats.length - 1);
    return otherCats;
   }