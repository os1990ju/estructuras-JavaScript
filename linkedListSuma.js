class Node {
  constructor(val){
      this.value = val;
      this.next = null
  }
}
//create nodes
a = new Node(5)
b = new Node(6)
c = new Node(9)
d = new Node(-5)
//linkedList
a.next = b;
b.next = c;
c.next = d;

// const sumList = (head) => {
//     // todo
//     let suma=0;
//     current = head;
//     while(current!==null){
//       suma+=current.value;
//       current= current.next;
//     }
//     return suma
//   };

//recursive

const sumList = (head) => {
  // todo
  current = head;
  if(current === null) return 0
  return current.value + sumList(current.next) 
};

  console.log(sumList(a));