function makeFlat(arr) {
  if (Function.length > 1) {
    return "Function accepts only 1 argument, too much arguments provided";
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
