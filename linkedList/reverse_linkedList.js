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

// code walkthrough
const reverseList =(head)=>{
  let prev = null;
  let current= head;
  while(current !=null){
  let next =current.next;
    current.next= prev;
    prev= current 
      current= next;
  }
  return prev;
}

console.log(reverseList(a))

// recursion

const reverse_List=(head,prev=null)=>{
 if(head ==null){
   return prev
 }
 let next = head.next;
 head.next = prev;
return reverse_List(next,head)

}
console.log(reverse_List(a))