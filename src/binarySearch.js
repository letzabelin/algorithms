export default (arr, value) => {
  let leftBoundary = -1;
  let rightBoundary = arr.length;

  while(rightBoundary - leftBoundary > 1) {
    const middleIndex = Math.floor((leftBoundary + rightBoundary) / 2);

    if (arr[middleIndex] === value) {
      return middleIndex;
    }

    if (arr[middleIndex] > value) {
      rightBoundary = middleIndex;
    } else {
      leftBoundary = middleIndex;
    }
  }

  return -1;
};
