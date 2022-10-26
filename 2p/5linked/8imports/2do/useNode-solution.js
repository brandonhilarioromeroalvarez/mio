function Linked(n) {
    this.head = n
    this.tail = n
    this.size = 1

    this.getHead = getHead
    this.getTail = getTail
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains

    this.insertBefore = insertBefore
    this.insertAfter = insertAfter
}

function getHead(){return this.head}

function prepend(n){
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

//
// exercise
//

function contains(k){
  let c = this.head;
  while(c){
    if(c.key === k){
      return true
    }
    c = c.next
  }
  return false
}

function getTail(){
  if(this.size === 0){
    return null;
  }
  return this.tail;
}
function insertAfter(nN, k) {
  let c = this.head
  while (c) {
    if (c.key === k) {
      nN.next = c.next;
      c.next = nN
      this.size++
      return true
    }
    c = c.next
  }
  return false
}


function insertBefore(nN, k) {  
  let c = this.head
  while (c) {
    if (c.next.key === k) { 
      nN.next = c.next  
      c.next = nN
      this.size++
      return true  
    }
    c = c.next 
  }
  return false   
}