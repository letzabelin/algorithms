const mergeArrays = (firstArray, secondArray) => {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    // sortedArray.push(firstArray[i] < secondArray[j] ? firstArray[i++] : secondArray[j++]);
    if (firstArray[i] < secondArray[j]) {
      sortedArray.push(firstArray[i]);
      i += 1;
    } else {
      sortedArray.push(secondArray[j]);
      j += 1;
    }
  }

  return [
    ...sortedArray,
    ...firstArray.slice(i),
    ...secondArray.slice(j),
  ];
};

const mergeSort = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }

  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArraySide = arr.slice(0, middle);
  const rightArraySide = arr.slice(middle);

  return mergeArrays(mergeSort(leftArraySide), mergeSort(rightArraySide));
};

export default mergeSort;
