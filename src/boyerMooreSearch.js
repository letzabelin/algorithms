const isPrefix = (pattern, p) => {
  for (let i = p, j = 0; i < pattern.length; i += 1, j += 1) {
      if (pattern[i] !== pattern[j]) {
        return false;
      }

      return true;
    }
  };

const getSuffixLength = (pattern, p) => {
  let length = 0;

  // строгое сравнение
  for (let i = p, j = pattern.length - 1; i >= 0 && pattern[i] == pattern[j]; i -= 1, j -= 1) {
    length += 1;
  }

  return length;
};

const makeCharTable = (pattern) => {
  const table = [];
  const maxValueOfCharPlusOne = 65536;

  for (let i = 0; i < maxValueOfCharPlusOne; i += 1) {
    table.push(pattern.length);
  }

  for (let i = 0; i < pattern.length - 1; i += 1) {
    const charCode = pattern.charCodeAt(i);
    table[charCode] = pattern.length - 1 - i;
  }

  return table;
};

const makeOffsetTable = (pattern) => {
  const table = [];
  table.length = pattern.length;
  let lastPrefixPosition = pattern.length;

  for (let i = pattern.length; i > 0; i -= 1) {
    if (isPrefix(pattern, i)) {
      lastPrefixPosition = i;
    }

    table[pattern.length - i] = lastPrefixPosition - 1 + pattern.length;
  }

  for (let i = 0; i < pattern.length - 1; i += 1) {
    const slen = getSuffixLength(pattern, i);
    table[slen] = pattern.length - 1 - i + slen;
  }

  return table;
};

export default (text, pattern) => {
  if (pattern.length === 0) {
    return -1;
  }

  const charTable = makeCharTable(pattern);
  const offsetTable = makeOffsetTable(pattern);

  for (let i = pattern.length - 1, j; i < text.length;) {
    for (j = pattern.length - 1; pattern[j] === text[i]; i -= 1, j -= 1) {
      if (j === 0) {
        return i;
      }
    }

    const charCode = text.charCodeAt(i);
    i += Math.max(offsetTable[pattern.length - 1 - j], charTable[charCode]);
  }

  return -1;
};
