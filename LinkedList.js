class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = new Node(value);
      this.size++;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = new Node(value, null, lastNode.index + 1);
      this.tail = lastNode.next;
      this.size++;
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = new Node(value);
      this.size++;
    } else {
      let currentHead = this.head;
      this.head = new Node(value, currentHead);
      this.size++;

      let current = this.head;
      while (current) {
        current.index++;
        current = current.next;
      }
    }
  }

  at(index) {
    let current = this.head;
    while (current) {
      if (current.index === index) return console.log(current);
      current = current.next;
    }
    return console.log(
      `⚠️  Warning: Size of Linked List is: ${this.head.index} - ${this.tail.index}. Please enter the number from this range😁`
    );
  }

  pop() {
    if (!this.head) {
      console.log('No elements to delete');
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      this.tail = null;
      return;
    }

    let current = this.head;

    while (current.next && current.next.next) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
    this.size--;
  }

  contains(value) {
    if (!this.head) return console.log('No elements in Linked List');

    let current = this.head;
    while (current) {
      if (current.data === value) return true;
      current = current.next;
    }

    return false;
  }

  find(value) {
    if (!this.head) return console.log('No elements in Linked List');

    let current = this.head;
    while (current) {
      if (current.data === value) return current.index;
      current = current.next;
    }

    return null;
  }

  toString() {
    let stringLL = '';
    if (!this.head) return stringLL;

    let current = this.head;
    while (current) {
      stringLL += `( ${current.data} ) -> `;
      current = current.next;
    }
    stringLL += `( null )`;

    return stringLL;
  }

  inserAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log('Invalid index');
      return;
    }

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    let newNode = new Node(value);
    let current = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    prev.next = newNode;
    newNode.next = current;

    current = newNode;
    while (current) {
      current.index = i++;
      current = current.next;
    }

    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log('Invalid index');
      return;
    }

    if (!this.head) {
      return console.log('Nothing to delete');
    }

    if (index === this.head.index) {
      this.head = this.head.next;
      this.size--;
      this.reindex();
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    prev.next = current.next;

    if (!prev.next) {
      this.tail = prev;
    }

    this.size--;
    this.reindex();
  }

  reindex() {
    let current = this.head;
    let i = 0;
    while (current) {
      current.index = i++;
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

class Node {
  constructor(data, next = null, index = 0) {
    this.index = index;
    this.data = data;
    this.next = next;
  }
}

export { LinkedList }