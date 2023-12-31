// Given a parameter head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached
// again by continuously following the next pointer.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Ex. 3 -> -8 -> 2 -> 4
//           ^---------|

interface ListNode {
  value: any;
  next: ListNode | undefined;
}
