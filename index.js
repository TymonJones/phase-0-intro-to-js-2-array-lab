// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyCat = cats.slice();
    copyCat.push(name);
//    console.log(copyCat);
    return copyCat;
}

function prependCat(name){
    const copyCatTwo = [name, ...cats];
    // console.log(cats)
    return copyCatTwo;
}

function removeLastCat(){
   const copyCatThree = cats.slice(0, cats.length - 1);
//   console.log(cats);
    return copyCatThree;
}

function removeFirstCat(){
    const copyCatFour = cats.slice(1);
    return copyCatFour;
}