import { binarySearch } from '../src';

const sortedArray = Array.from({ length: 20 }, (_, i) => i + 1);

describe('array includes value', () => {
  test('first test', () => {
    expect(binarySearch(sortedArray, 5)).toBe(4);
    expect(binarySearch(sortedArray, 1)).toBe(0);
    expect(binarySearch(sortedArray, 20)).toBe(sortedArray.length - 1);
  });
});

describe('array does not include value', () => {
  test('first test', () => {
    expect(binarySearch(sortedArray, 30)).toBe(-1);
    expect(binarySearch(sortedArray, -5)).toBe(-1);
  });
});


