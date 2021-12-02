/*Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
Refactor it to use the rest operator & an arrow function:*/
const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0)


//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
const findMin = (...args) => args.reduce((min, nextVal) => {
    return (min < nextVal ? min : nextVal);
});


//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

const doubleAndReturnArgs = (arr, ...args) => {
    let doubleNum = args.map(val => val * 2);
    return [...arr, ...doubleNum];
}


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const newArr = [...items];
    let randIndx = Math.floor(Math.random() * newArr.length);
    newArr.splice(items[randIndx], 1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val })


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 })

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]: val })