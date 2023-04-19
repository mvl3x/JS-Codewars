// TODO: implement the four functions specified.
const head = (arr) => arr[0];

const tail = (arr) => arr.slice(1);

const init = (arr) => arr.slice(0, arr.length - 1);

const last = (arr) => arr[arr.length - 1];

const arr = [0, 1, 2, 3, 4, 5];

console.log(head(arr));
console.log(tail(arr));
console.log(init(arr));
console.log(last(arr));
