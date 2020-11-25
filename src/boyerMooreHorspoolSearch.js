export default (haystack, needle, startIndex = 0) => {
  const { length: needleLength } = needle;
  let { length: haystackLength } = haystack;

  if (needleLength <= 0 || haystackLength <= 0) {
    return -1;
  }

  let currentIndex = startIndex;
  const lastIndex = needleLength - 1;
  const offsetTable = {};

  for (let i = 0; i < lastIndex; i += 1) {
    offsetTable[needle[i]] = lastIndex - i;
  }

  while (haystackLength >= needleLength) {
    for (let i = lastIndex; haystack[currentIndex + i] === needle[i]; i -= 1) {
      if (i === 0) {
        return currentIndex;
      }
    }

    const offset = offsetTable[haystack[currentIndex + lastIndex]] ?? needleLength;
    haystackLength -= offset;
    currentIndex += offset;
  }

  return -1;
};
