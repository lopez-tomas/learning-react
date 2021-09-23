const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3, 4];

//fn(arr[0], arr[1], arr[2]);
fn(...arr);

const arr1 = [5, 6]

//const arr2 = arr.concat(arr1);
//const arr2 = [...arr, ...arr1];
const arr2 = [...arr, 2, 3];
const arr3 = arr; // -> This is NOT a copy of arr
arr[0] = "happy pig";
console.log(arr, arr2, arr3);
