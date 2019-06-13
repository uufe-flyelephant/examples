// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let firstNode, preNode, tempNode, plus, flag = 0
	while(l1){
    plus = l1.val + l2.val + flag
    if(plus > 10){
      plus = plus - 10
      flag = 1
    } else {
      flag = 0
    }
    tempNode = preNode
		preNode = new ListNode(plus)
	} 
};
