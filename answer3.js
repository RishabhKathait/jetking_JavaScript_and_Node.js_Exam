function emptyArray(arr) {
    arr = [];
    return arr;
}

const array = [1,2,3,4,5];
console.log("Before making an array empty: ", array);

const result = emptyArray(array);
console.log("After making an array empty", result);