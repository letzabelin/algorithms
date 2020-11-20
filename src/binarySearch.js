export default (arr, value) => {
  let leftBoundary = -1;
  let rightBoundary = arr.length;

  while(rightBoundary - leftBoundary > 1) {
    const middleOfArray = Math.floor((leftBoundary + rightBoundary) / 2);

    if (arr[middleOfArray] === value) {
      return middleOfArray;
    }

    if (arr[middleOfArray] > value) {
      rightBoundary = middleOfArray;
    } else {
      leftBoundary = middleOfArray;
    }
  }

  return -1;
};
