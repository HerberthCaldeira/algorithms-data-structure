export interface NodeStack<T> {
  value: T;
  prev?: NodeStack<T>;
}

export class Stack<T> {
  public length: number;
  private head?: NodeStack<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node = { value: item } as NodeStack<T>;
    this.length++;

    if (!this.head) {
      node.prev = undefined;
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) {
      console.log("empty stack");
      return undefined;
    }

    this.length--;
    let newHead = this.head?.prev;
    let popedHead = this.head;
    this.head = newHead;

    return popedHead.value;
  }

  peek(): void {
    console.log(this.head);
  }

  show() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}
