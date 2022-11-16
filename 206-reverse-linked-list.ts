import { ListNode } from "./LinkedList";

// in place linked list reversal
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null
    let curr = head;
    let prev: ListNode = null;
    let next = head.next
    console.log(head)
    while (next != null) {
        curr.next = prev
        prev = curr
        curr = next
        next = next.next
    }
    curr.next = prev
    return curr
};