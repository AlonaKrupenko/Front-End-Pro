//#1
const arr1 = ["a", "b", "c", "d"];
alert(`${arr1[0]}+${arr1[1]}, ${arr1[2]}+${arr1[3]}`);

//#2
const arr2 = [2, 5, 3, 9];
const result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
alert(result);

//#3
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(arr3[1][0]);

//#4
const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
alert(obj.js[0]);

//#5
let arr = [];
let elem = "";

for (let i = 0; i < 5; i++) {
  elem += "x";
  arr.push(elem);
}

//#6
let arr = [];

for (let i = 1; i < 5; i++) {
  let elem = "";
  for (let j = 0; j < i; j++) {
    elem += i;
  }
  arr.push(elem);
}

//#7
function arrayFill(elem, quantity) {
  let arr = [];
  for (let i = 1; i <= quantity; i++) {
    arr.push(elem);
  }
  return arr;
}

//#8
const arr = [7, 2, 5, 3];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
  sum += arr[i];
  if (sum > 10) {
    alert(`Небходимо сложить елементов: ${i + 1}`);
    break;
  }
}

//#9
const arr = [0, 7, 2, 5, 3];
let result = [];

for (let i = arr.length; i > 0; i--) {
  let elem = arr.pop();
  result.push(elem);
}

//#10
const arr1 = [[1, 2, 3], [4, 5], [6]];

function recFindSum(arr) {
  let sum = 0;

  for (let elem of arr) {
    if (Array.isArray(elem) === true) {
      sum += recFindSum(elem);
    } else {
      sum += elem;
    }
  }
  return sum;
}

//#11
const arr1 = [
  22,
  [1, 3, 6],
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      sum += arr[i];
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j]) === false) {
          sum += arr[i][j];
        } else {
          for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
          }
        }
      }
    }
  }
  return sum;
}
findSum(arr1);
