function randomize() {
  const usedNumsArr = [];

  function getRandomNum() {
    if (usedNumsArr.length === 100) {
      return usedNumsArr;
    }

    const randomNum = Math.floor(1 + Math.random() * 100);

    if (!usedNumsArr.includes(randomNum)) {
      usedNumsArr.push(randomNum);
    } else {
      return getRandomNum();
    }
    return usedNumsArr;
  }
  return getRandomNum;
}
