class Node {
    constructor(val){
        this.value = val;
        this.next = null
    }
}
//create nodes
a = new Node('a')
b = new Node('b')
c = new Node('c')
d = new Node('d')
//linkedList
a.next = b;
b.next = c;
c.next = d;
// function linkedListValues(head){
    
//     let current = head;
//     const values = [];

//     while(current!==null){
//         values.push(current.value);
//         current = current.next;
//     }
//     return values


// }
// console.log(linkedListValues(a));

//recursive

const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
  };
  
  const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.value);
    fillValues(head.next, values);
  };
  console.log(linkedListValues(a));
