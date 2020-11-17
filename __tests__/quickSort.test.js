import shuffle from 'lodash/shuffle';
import { quickSort } from '..';

const expectedArr = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArr = shuffle(expectedArr);

describe('Sorting algorithms', () => {
  test('quickSort', () => {
    expect(quickSort(testArr)).toEqual(expectedArr);
  });
});
