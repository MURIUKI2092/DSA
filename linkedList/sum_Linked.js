// return the sum of items in the linked List

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
a= new Node (1);
b= new Node(7);
c= new Node(10);
d = new Node(2);

a.next = b;
b.next = c;
c.next = d;
 
const sumList=(head)=>{
  let sum = 0;
  let current = head;
  while(current != null){
    sum+=current.val;
    current = current.next;
  }
console.log(sum)
}
sumList(a)

// recursively doing the sum list
const sum_list=(head)=>{
   if( head== null){
    return 0;
  }
   return head.val +sum_list(head.next)
  

}
console.log(sum_list(a))
