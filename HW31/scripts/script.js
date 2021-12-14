function makeFlat(arr) {
  if (arguments.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  }
  const updatedArr = [];

  function flat(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        flat(arr1[i]);
      } else {
        updatedArr.push(arr1[i]);
      }
    }
    return updatedArr;
  }
  return flat(arr);
}

const array = [1, 3, [8, 5, 1, [5, 2, 3, 4], 1, 0]];

console.log(makeFlat(array, 5));
