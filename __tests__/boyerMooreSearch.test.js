import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { boyerMooreSearch } from '../src';

const testPath = path.join(__dirname, '__fixtures__', 'textForBoyerMooreSearch.txt');
const testText = fs.readFileSync(testPath, 'utf-8');

test('Text does not include pattern', () => {
  const result = boyerMooreSearch('Hello, my name is Andrew', 'meow');
  expect(result).toBe(-1);
});

test('Text includes pattern: first', () => {
  const result = boyerMooreSearch('Hello, my name is Andrew', 'my');
  expect(result).toBe(7);
});

test('Text includes pattern: second', () => {
  const result = boyerMooreSearch(testText, 'meow');
  const expectedWord = testText.slice(2743, 2747);
  expect(result).toBe(2743);
  expect(expectedWord).toBe('meow');
});
