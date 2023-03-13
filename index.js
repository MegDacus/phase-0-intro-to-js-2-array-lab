// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = [...cats.slice(0,cats.length), name]
    return newCats
}

function prependCat(name) {
    const newerCats = [name, ...cats.slice(0,cats.length)]
    return newerCats
}

function removeLastCat() {
    const fewCats = cats.slice(0,2)
    return fewCats
}

function removeFirstCat() {
    const fewerCats = cats.slice(1,3)
    return fewerCats
}