class Node {
  constructor(val){
    this.val= val;
    this.next =  null;
  }
}

a = new Node(2);
b = new Node(5);
c = new Node(7);
d = new Node(9);

a.next = b;
b.next = c;
c.next = d;

// searches the value passed as it transverses through the linked list
const find_linkedList=(head,target)=>{
  let current = head;
  while(current != null){
    if(current.val == target) return true
    current=  current.next;
  }
  return false;

}
console.log(find_linkedList(a,11));
//recursive solution
const linked_listFind =(head,target)=>{
  if(head == null){
    return  false;
  }
  if(head.val == target){
    return true;
  }
  return linked_listFind(head.next,target)
}

console.log(linked_listFind(a,11))

// find the node value when given an index
// recursion method
const find_node_val =(head,index)=>{
  let count = 0;
  if(head == null){
    return null;
  }
  if(index ==0){
    return head.val
  }
  return find_node_val(head.next,index-1)



}
console.log(find_node_val(a,2))
//iterative solution
//linear time.
const findNode_val=(head,index)=>{
  let count = 0;
  let current = head;
  while(current != null){
    if(count == index)return current.val
    count+=1;
    current = current.next
  }
  return null;
}
console.log(findNode_val(a,2))