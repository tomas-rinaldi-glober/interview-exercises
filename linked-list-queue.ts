// Implement a Queue (First In, First Out) using a LinkedList
// Using a single linked list, create a Queue class containing a enqueue(item), dequeue() and peek() methods
// Enqueue should add the given item to the queue, Dequeue should return the next item in the queue and remove it,
// and Peek should return the next item in the queue without removing it
// Optional 1: Add a length getter function to return how many items we have in the queue
// Optional 2: Make the Queue and LinkedList generic if the language supports it

interface ListNode {
  item: any;
  next: ListNode | undefined,
}

class Queue {
  // TODO: Use ListNodes to implement the queue

  public enqueue(item: any) {
    // TODO
  }

  public dequeue(): any {
    // TODO
  }

  public peek(): any {
    // TODO
  }
}
