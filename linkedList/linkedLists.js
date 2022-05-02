// linked Lists


/* //class for a new node
class Node{
  constructor(d){
    this.data = d;
    this.next = null;

  }
}

// writing a function to print each node given

const printList =()=>{
  let n = head;
  while(n!=null){
    console.log(n.data+ " ");
    n=n.next
  }
}
//assigning and creating new nodes
let head = new Node(1);
let second= new Node(2);
let third = new Node(3)

//linking the nodes 

head.next = second;
second.next =third;

printList()
 

// another linkedList with ten nodes

class Node2{
  constructor(d){
    this.data = d;
    this.next = null;
  }
}

// printing the lists
const printer=()=>{
  let p = head;
  while(p!=null){
    console.log(p.data+ " ");
    p =p.next
  }

  
}

//pushing the node at the front
const InsertAtHead =(  newData)=>{
  let new_node = new Node2(newData);
  new_node.next = head;
  head = new_node;

}

//inserting a node after a given node

const insertAfter=(prev_node,new_data)=>{
  if(prev_node ==null){
    console.log("The given previous node cannot be empty");
    return;
  }
  let new_node = new Node2(new_data);
  new_node.next = prev_node.next;
  prev_node.next =  new_node;

}

//inserting a node at the end of the linked list

const insertEnd=(new_data)=>{
  var newNode = new Node2(new_data);

  // check if head == null
  if(head == null){
    head = new Node2 (new_data);
    return
  }
  // giving the next node null because it is going to be null

  newNode.next = null;

  // transverse the linked list until the last item is last node
  let last = head;
  while(last.next !=null){
    last = last.next
  }
  // if it hits the last node whose next is null then

  last.next = newNode
  return;

}
//setting up 5 nodes

let head = new Node2(1);
let second = new Node2(2);
let third = new Node2(3);
let fourth = new Node2(4);
let fifth = new Node2(5)

// linking up the   nodes
head.next = second;
second.next= third;
third.next = fourth;
fourth.next= fifth;


// printing the results
InsertAtHead(11) 
insertAfter(head,5)
insertEnd(20);
printer()
 
// pushing a node at the front of the linked list

// deletion of a node
/* 
var head ;

class Node3{
  constructor(value){
    this.data = value;
    this.next = null;
  }
}

const deleteNode =(key)=>{
  var temp = head, prev = null;

  // if head itself holds the data to be deleted, then head will be 
  // equals to next
  if(temp !=null&& temp.data ==key){
    head = temp.next;
    return;
  }
  //search for the key to be  deleted, keep track of the previous
  //node as we need to change temp.next
  while(temp != null && temp.data !=key){
    prev = temp;
    temp = temp.next;
  }
  // if key was not present in the Linked List

  if(temp == null)
  return;

  // unlike the node fromm linked list
  prev.next = temp.next;
}
// inserts a new node at front of the list

const push=(newData)=>{
  let newNode = new Node3(newData);
  newNode.next = head;
  head = newNode;

}

const PrintList=()=>{
  myNode = head;
  while(myNode != null){
    console.log(myNode.data+ " ");
    myNode = myNode.next
  }

}

push(1)
push(2)
push(3)
push(7)
push(4)
push(5)

console.log("created Linked List is : ");
PrintList();
console.log("after deletion the Linked List is : ");
deleteNode(7)
PrintList()
 */

// using recursion to transverse a Linked List

class Node{
  constructor(val){
    this.val= val;
    this.next = null
  }
}
a =new  Node("a")
b= new Node("b");
c = new Node("c");
d = new Node("d")

// link them to each of their next values;

a.next = b
b.next = c;
c.next = d;


const printList =(head)=>{
  let myHead = head;
  let myArray = []
  while(myHead != null){
    myArray.push(myHead.val);
    myHead = myHead.next;
  }
 return console.log(myArray);
}
// print using recursion
let myArray=[];
const PrintRecur=(head)=>{
  if(head==null){
    return;
  }
  myArray.push(head.val);
 
  PrintRecur(head.next); 
  

}

printList(a);


PrintRecur(a)
console.log(myArray);