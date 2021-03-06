import { binarySearch } from '../src';

const sortedArray = Array.from({ length: 20 }, (_, i) => i + 1);

test('array includes value', () => {
  expect(binarySearch(sortedArray, 5)).toBe(4);
  expect(binarySearch(sortedArray, 1)).toBe(0);
  expect(binarySearch(sortedArray, 20)).toBe(sortedArray.length - 1);
});

test('array does not include value', () => {
  expect(binarySearch(sortedArray, 30)).toBe(-1);
  expect(binarySearch(sortedArray, -5)).toBe(-1);
});


