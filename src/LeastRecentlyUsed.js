class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class LeastRecentlyUsed {
  constructor(limit = 10) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  write(key, value) {
    this.ensureLimit();

    if (!this.head) {
      const node = new Node(key, value);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    this.cache[key] = this.head;
    this.size += 1;
  }

  read(key) {
    if (this.cache[key]) {
      const { value } = this.cache[key];
      this.remove(key);
      this.write(key, value);

      return value;
    }

    return `Item not available in cache with key: ${key}`;
  }

  clear() {
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  ensureLimit() {
    if (this.size === this.limit) {
      this.remove(this.tail.key);
    }
  }

  remove(key) {
    const node = this.cache[key];

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size -= 1;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter += 1;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
