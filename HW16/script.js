const arr = [1, 2, 3, -1, -2, -3];

function isEmpty(arr) {
  return arr.length === 0;
}

function findPositiveNum(arr) {
  const updatedArr = [];

  if (isEmpty(arr)) {
    alert("Исходный массив пуст");
    return;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        updatedArr.push(arr[i]);
      }
    }
  }

  if (isEmpty(updatedArr)) {
    console.log(null);
  } else {
    console.log(updatedArr);
  }
}

findPositiveNum(arr);
