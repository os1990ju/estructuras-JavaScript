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

