import shuffle from 'lodash/shuffle';

import { quickSort, bubbleSort, mergeSort, insertionSort } from '../src';

let expectedArr;
let testArr;

beforeEach(() => {
  expectedArr = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  testArr = shuffle(expectedArr);
});

test('quickSort', () => {
  expect(quickSort(testArr)).toEqual(expectedArr);
});

test('bubbleSort', () => {
  expect(bubbleSort(testArr)).toEqual(expectedArr);
});

test('mergeSort', () => {
  expect(mergeSort(testArr)).toEqual(expectedArr);
});

test('insertionSort', () => {
  expect(insertionSort(testArr)).toEqual(expectedArr);
});
