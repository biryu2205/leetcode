
var addTwoNumbers = function(l1, l2) {
  var node = new ListNode(0);
  var result = node;
  var carry = 0;

  while (l1 || l2 || carry) { 
    if (l1) {
      var l1_value = l1.val;
    } else {
      l1_value = 0;
    }
    if (l2) {
      var l2_value = l2.val;      
    } else {
      l2_value = 0;
    }
    var adding = l1_value + l2_value + carry;
    if (adding >= 10) {
      adding -= 10;
      carry = 1;    
    } else {
      carry = 0;
    }
    node.next = new ListNode(adding);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    node = node.next
  } 
  return result.next
};
