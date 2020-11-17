const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let index = 1; index < arr.length; index += 1) {
    const currentElement = arr[index];
    if (currentElement < pivot) {
      left.push(currentElement);
    } else {
      right.push(currentElement);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

export default quickSort;
