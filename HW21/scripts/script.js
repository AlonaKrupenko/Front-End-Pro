//indexOf
function findIndex(arr, elem, indexOfElem = 0) {
  if (Math.abs(indexOfElem) >= arr.length) {
    return -1;
  }
  const startIndex =
    indexOfElem >= 0 ? indexOfElem : arr.length - Math.abs(indexOfElem);

  for (let i = startIndex; i <= arr.length - 1; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }

  return -1;
}

//lastIndexOf
function findLastIndex(arr, elem, indexOfElem = arr.length) {
  if (indexOfElem > arr.length) {
    indexOfElem = arr.length;
  }

  const startIndex =
    indexOfElem >= 0 ? indexOfElem : arr.length - Math.abs(indexOfElem);

  for (let i = startIndex; i >= 0; i--) {
    if (arr[i] === elem) {
      return i;
    }
  }

  return -1;
}

//find
function findElem(array, callback) {
  for (let i = 0; i < array.length; i++)
    if (callback(array[i], i, array)) {
      return array[i];
    }
}

function cbFindElem(value, index, array) {
  return value === 8;
}

//findIndex
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++)
    if (callback(array[i], i, array)) {
      return i;
    }
  return -1;
}

function cbFindIndex(value, index, array) {
  return value === 5;
}

//includes
function includesElem(arr, elem, fromIndex = 0) {
  const startIndex = fromIndex >= 0 ? fromIndex : arr.length + fromIndex;

  for (let i = startIndex; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (isNaN(arr[i]) === true) {
        return true;
      }
    }
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
}

//every
function checkEveryElem(arr, callback) {
  if (arr.length === 0) {
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

function cbCheckEveryElem2(elem, index, arr) {
  return elem > 0;
}

//some
function findSomeElem(arr, callback) {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function cbfindSomeElem(elem, index, arr) {
  return elem % 2 === 0;
}
