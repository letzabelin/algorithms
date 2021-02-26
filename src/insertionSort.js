export default (arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    const key = arr[index];
    let prevIndex = index - 1;

    while (arr[prevIndex] > key && prevIndex >= 0) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex -= 1;
    }

    arr[prevIndex + 1] = key;
  }

  return arr;
};
