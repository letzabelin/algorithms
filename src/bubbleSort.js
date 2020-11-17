const bubbleSort = (arr) => {
  for (let i = 0, endOfI = arr.length - 1; i < endOfI; i += 1) {
    let wasSwap = false;

    for (let j = 0, endOfJ = endOfI - i; j < endOfJ; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }

    if (!wasSwap) {
      break;
    }
  }

  return arr;
};

export default bubbleSort;
