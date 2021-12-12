function getRundomPosition(arrLength, usedPossitions1) {
  const randomPosition1 = Math.floor(Math.random() * (arrLength + 1));
  if (usedPossitions1.includes(randomPosition1)) {
    return getRundomPosition(arrLength, usedPossitions1);
  }
  return randomPosition1;
}

function insertWordInto(str) {
  const splitedStringArr = str.split(" ");
  let usedPositions = [];

  return function (insertedStr) {
    if (usedPositions.length === splitedStringArr.length + 1) {
      usedPositions = [];
    }

    const randomPosition = getRundomPosition(
      splitedStringArr.length,
      usedPositions
    );

    splitedStringArr.splice(randomPosition, 0, insertedStr);

    if (!usedPositions.includes(randomPosition)) {
      usedPositions.push(randomPosition);
    }

    let updatedString = splitedStringArr.join(" ");
    splitedStringArr.splice(randomPosition, 1);
    return updatedString;
  };
}
