export interface Node<T> {
  value: T;
  next?: Node<T>;
}
export default class Queue<T> {
  public length: number;
  /**
   * First element
   */
  private head?: Node<T>;
  /**
   * Last element
   */
  private tail?: Node<T>;
  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(item: Node<T>): void {
    this.length++;

    if (!this.tail) {
      this.tail = this.head = item;
      return;
    }

    this.tail.next = item;
    this.tail = item;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = this.head.next;

    head.next = undefined;
  }

  peek() {
    return this.head?.value;
  }
}
