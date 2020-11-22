import { LeastRecentlyUsed } from '../src';

const list = new LeastRecentlyUsed(3);

afterEach(() => {
  list.clear();
})

test('list is empty', () => {
  expect(list.size).toBe(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(list.cache).toEqual({});
});

test('list contains values', () => {
  expect(list.limit).toBe(3);

  list.write('a', 100);
  expect(list.size).toBe(1);
});

test('list does not exceed the limit', () => {
  list.write('a', 100);
  list.write('b', 200);
  list.write('c', 300);
  list.write('d', 400);

  expect(list.size).toBe(3);
});

test('list deletes unused data', () => {
  list.write('a', 100);
  list.write('b', 200);
  list.write('c', 300);
  list.write('d', 400);

  expect(list.read('a')).toBe('Item not available in cache with key: a');

  list.clear();
  list.write('a', 100);
  list.write('b', 200);
  list.write('c', 300);
  list.read('a');
  list.write('d', 400);

  expect(list.read('b')).toBe('Item not available in cache with key: b');
});
